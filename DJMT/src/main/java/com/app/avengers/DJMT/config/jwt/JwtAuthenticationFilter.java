package com.app.avengers.DJMT.config.jwt;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import java.io.IOException;
import java.util.Optional;

//해당 클래스는 JwtTokenProvider가 검증을 끝낸 Jwt로부터 유저 정보를 조회해와서 UserPasswordAuthenticationFilter 로 전달합니다.

@Slf4j
@RequiredArgsConstructor
@Component
public class JwtAuthenticationFilter extends GenericFilterBean {

    private final JwtTokenProvider jwtTokenProvider;

    // http 요청을 여기서 먼저 체크
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        // 헤더에서 JWT 를 받아옴 -> 헤더에서 계속 못받아오는 중.. react에서 넘길 때 값이 안오는 듯.. 우선 cookie로 대체
        String rToken = jwtTokenProvider.resolveToken((HttpServletRequest) request);
        String token = jwtTokenProvider.resolveToken((HttpServletRequest) request);
        log.info("token >>>> " + token);

        // 권한 permitAll 했는데.. 계속 체크해서 우선 추가해둠

        if(Optional.ofNullable(((HttpServletRequest) request).getCookies()).toString().equals("Optional.empty") ){
            chain.doFilter(request, response);
            return;
        }

        // 권한체크 시 쿠키에서 토큰 가져옴
        Cookie cookie = jwtTokenProvider.resolveCookies((HttpServletRequest) request, "jwtToken");

        if(cookie == null) {
            chain.doFilter(request, response);
            return;
        }

        if (jwtTokenProvider.validateToken(cookie.getValue())) {
            Authentication authentication = jwtTokenProvider.getAuthentication(cookie.getValue());
            // SecurityContext 에 Authentication 객체를 저장합니다.
            SecurityContextHolder.getContext().setAuthentication(authentication);
            chain.doFilter(request, response);
        }else{
            chain.doFilter(request, response);
        }
        // 발급받은 jwtToken이 유효한 토큰인지 확인
//        if (cookie != null && jwtTokenProvider.validateToken(cookie.getValue())) {
//            // 토큰이 유효하면 토큰으로부터 유저 정보를 받아옵니다.
//            Authentication authentication = jwtTokenProvider.getAuthentication(cookie.getValue());
//            // SecurityContext 에 Authentication 객체를 저장합니다.
//            SecurityContextHolder.getContext().setAuthentication(authentication);
//        }
//        chain.doFilter(request, response);
    }
}
