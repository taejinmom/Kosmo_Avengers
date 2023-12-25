package com.app.Gajago.service.jwt;

import com.app.Gajago.common.CommonService;
import com.app.Gajago.common.constants.Constants;
import com.app.Gajago.config.JwtTokenProvider;
import com.app.Gajago.dto.token.RefreshTokenDto;
import com.app.Gajago.dto.token.Token;
import com.app.Gajago.mapper.token.RefreshTokenMapper;
import com.app.Gajago.repository.RefreshTokenRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class JwtService{
    private final CommonService commonService;
    private final JwtTokenProvider jwtTokenProvider;
    private final RefreshTokenMapper refreshTokenRepository;
    @Transactional
    public void login(Token tokenDto){
        RefreshTokenDto refreshTokenDto = RefreshTokenDto.builder().refreshTokenId(commonService.makeUUID(Constants.MEMBER)).keyId(tokenDto.getKey()).refreshToken(tokenDto.getRefreshToken()).build();
        String loginUserKeyId = refreshTokenDto.getKeyId();
        if(refreshTokenRepository.existsByKeyId(loginUserKeyId) > 0){
            log.info("기존의 존재하는 refresh 토큰 삭제");
            refreshTokenRepository.deleteByKeyId(loginUserKeyId);
        }
        refreshTokenRepository.saveToken(refreshTokenDto);

    }

    public RefreshTokenDto getRefreshToken(String refreshToken){

        return refreshTokenRepository.findByRefreshToken(refreshToken);
    }

    public Map<String, String> validateRefreshToken(String refreshToken){
        RefreshTokenDto refreshTokenDto1 = getRefreshToken(refreshToken);
        String createdAccessToken = jwtTokenProvider.validateRefreshToken(refreshTokenDto1);

        return createRefreshJson(createdAccessToken);
    }

    public Map<String, String> createRefreshJson(String createdAccessToken){

        Map<String, String> map = new HashMap<>();
        if(createdAccessToken == null){

            map.put("errortype", "Forbidden");
            map.put("status", "402");
            map.put("message", "Refresh 토큰이 만료되었습니다. 로그인이 필요합니다.");

            return map;
        }
        //기존에 존재하는 accessToken 제거

        map.put("status", "200");
        map.put("message", "Refresh 토큰을 통한 Access Token 생성이 완료되었습니다.");
        map.put("accessToken", createdAccessToken);

        return map;


    }
    public ResponseEntity<?> validateRefreshToken(@RequestBody HashMap<String, String> bodyJson){

        log.info("refresh controller 실행");
        Map<String, String> map = validateRefreshToken(bodyJson.get("refreshToken"));

        if(map.get("status").equals("402")){
            log.info("RefreshController - Refresh Token이 만료.");
            return new ResponseEntity<>("Refresh Token이 만료", HttpStatus.UNAUTHORIZED);
        }

        log.info("RefreshController - Refresh Token이 유효.");
        return new ResponseEntity<>("Refresh Token이 유효", HttpStatus.OK);

    }
}