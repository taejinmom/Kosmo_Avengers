package com.app.avengers.DJMT.config.jwt;

import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.dto.token.TokenDto;
import com.app.avengers.DJMT.service.member.MemberService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.annotation.PostConstruct;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Base64;
import java.util.Date;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Component
public class JwtTokenProvider {
    @Value("${spring.jwt.secret}")
    private String accessSecretKey;
    @Value("${spring.jwt.refreshSecret}")
    private String refreshSecretKey;


    // 토큰 유효시간 30분
    private long accessTokenValidTime = 1 * 60 * 1000L;
    private long refreshTokenValidTime = 1 * 60 * 1000L;
    private final MemberService memberService;

    /**
     * description    : 객체 초기화, secretKey를 Base64로 인코딩한다.
     * 2023-12-23   by  taejin       
     */
    @PostConstruct
    protected void init() {
        accessSecretKey = Base64.getEncoder().encodeToString(accessSecretKey.getBytes());
    }

    /**
     * description    : JWT 토큰 생성
     * 2023-12-23   by  taejin       
     */
    public TokenDto createAccessToken(String mem_no, Object roles) {

        Claims claims = Jwts.claims().setSubject(mem_no); // JWT payload 에 저장되는 정보단위
        claims.put("mem_no", mem_no); // 정보는 key / value 쌍으로 저장된다.
        claims.put("roles", roles);
        Date now = new Date();

        //Access Token
        String accessToken = Jwts.builder()
                .setClaims(claims) // 정보 저장
                .setIssuedAt(now) // 토큰 발행 시간 정보
                .setExpiration(new Date(now.getTime() + accessTokenValidTime)) // set Expire Time
                .signWith(SignatureAlgorithm.HS256, accessSecretKey)  // 사용할 암호화 알고리즘과
                // signature 에 들어갈 secret값 세팅
                .compact();

        //Refresh Token
        String refreshToken =  Jwts.builder()
                .setClaims(claims) // 정보 저장
                .setIssuedAt(now) // 토큰 발행 시간 정보
                .setExpiration(new Date(now.getTime() + refreshTokenValidTime)) // set Expire Time
                .signWith(SignatureAlgorithm.HS256, refreshSecretKey)  // 사용할 암호화 알고리즘과
                // signature 에 들어갈 secret값 세팅
                .compact();

        return TokenDto.builder().accessToken(accessToken).refreshToken(refreshToken).key(mem_no).build();
    }

    /**
     * description    : JWT 토큰에서 인증 정보 조회
     * 2023-12-23   by  taejin       
     */
    public Authentication getAuthentication(String token) {
        MemberDto memberDto = memberService.ValidateTokenByMemNo(this.getUserPk(token));
        return new UsernamePasswordAuthenticationToken(memberDto, "", List.of(new SimpleGrantedAuthority(memberDto.getRole().name())));
    }

    /**
     * description    : 토큰에서 회원 정보 추출
     * 2023-12-23   by  taejin       
     */
    public String getUserPk(String token) {
        return (String)Jwts.parser().setSigningKey(accessSecretKey).parseClaimsJws(token).getBody().get("mem_no");
    }

    /**
     * description   : 헤더 대신 쿠키에서 값 가져오기 -> 프론트에서 등록을 jwtToken으로 했음
     * 2023-12-23   by   taejin      
     */
    public Cookie resolveCookies(HttpServletRequest request, String tokenName) {
        return Arrays.stream(((HttpServletRequest) request).getCookies())
                .filter(e -> e.getName().equals(tokenName))
                .findFirst()
                .orElse(null);
    }

    /**
     * description    : 쿠키에서 꺼낸 토큰 유효성 체크 - accessToken 유효기간 체크
     * 2023-12-23   by  taejin       
     */
    public boolean validateToken(String jwtToken) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(accessSecretKey).parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            log.info("accessToken 만료");
            return false;
        }
    }

    /**
     * description    : refreshToken 검증 -> 토큰이 유효하면 accessToken 재발급
     * 2023-12-23   by  taejin       
     */
    public String validateRefreshToken(String refreshToken){
        // refresh 객체에서 refreshToken 추출

        try {
            // refreshKey로 토큰 검증
            Jws<Claims> claims = Jwts.parser().setSigningKey(refreshSecretKey).parseClaimsJws(refreshToken);
            //refresh 토큰의 만료시간이 지나지 않았을 경우, 새로운 access 토큰을 생성합니다.
            if (!claims.getBody().getExpiration().before(new Date())) {
                log.info("validateRefreshToken >> refreshToken 유효 >> accessToken 재발급 - 136");
                return this.recreationAccessToken(claims.getBody().get("sub").toString(), claims.getBody().get("roles"));
            }
        }catch (Exception e) {
            //refresh 토큰이 만료되었을 경우, 로그인이 필요합니다.
            log.info("validateRefreshToken >> Refresh Token 만료 - 141");
            return "";

        }

        return null;
    }
    /**
     * description    : validateRefreshToken(검증) 후 유효할 경우 accessToken 재발급
     * 2023-12-23   by  taejin       
     */
    public String recreationAccessToken(String userPk, Object roles){

        Claims claims = Jwts.claims().setSubject(userPk); // JWT payload 에 저장되는 정보단위
        claims.put("mem_no", userPk);
        claims.put("roles", roles); // 정보는 key / value 쌍으로 저장된다.
        Date now = new Date();

        //Access Token
        String accessToken = Jwts.builder()
                .setClaims(claims) // 정보 저장
                .setIssuedAt(now) // 토큰 발행 시간 정보
                .setExpiration(new Date(now.getTime() + accessTokenValidTime)) // set Expire Time
                .signWith(SignatureAlgorithm.HS256, accessSecretKey)  // 사용할 암호화 알고리즘과
                // signature 에 들어갈 secret값 세팅
                .compact();

        return accessToken;
    }
}