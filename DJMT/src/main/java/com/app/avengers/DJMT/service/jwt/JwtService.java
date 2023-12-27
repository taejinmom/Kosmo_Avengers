package com.app.avengers.DJMT.service.jwt;

import com.app.avengers.DJMT.config.jwt.JwtTokenProvider;
import com.app.avengers.DJMT.constants.Constants;
import com.app.avengers.DJMT.dto.token.RefreshTokenDto;
import com.app.avengers.DJMT.dto.token.TokenDto;
import com.app.avengers.DJMT.mapper.token.RefreshTokenMapper;
import com.app.avengers.DJMT.service.common.CommonService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Slf4j
public class JwtService {
    private final CommonService commonService;
    private final JwtTokenProvider jwtTokenProvider;
    private final RefreshTokenMapper refreshTokenMapper;
    @Transactional
    public void login(TokenDto tokenDto){
        RefreshTokenDto refreshTokenDto = RefreshTokenDto.builder().refreshToken_id(commonService.makeUUID(Constants.MEMBER)).key_id(tokenDto.getKey()).refreshToken(tokenDto.getRefreshToken()).build();
        String loginUserKeyId = refreshTokenDto.getKey_id();
        if(refreshTokenMapper.existsByKeyId(loginUserKeyId) > 0){
            log.info("기존의 존재하는 refresh 토큰 삭제");
            refreshTokenMapper.deleteByKeyId(loginUserKeyId);
        }
        refreshTokenMapper.saveToken(refreshTokenDto);

    }

    public RefreshTokenDto getRefreshToken(String refreshToken){
        try{
            return refreshTokenMapper.findByRefreshToken(refreshToken);
        }catch (Exception e){
            log.error("refreshToken null1!");
            return null;
        }
    }

    /**
     * description    : refreshToken validate
     * 2023-12-23   by  taejin
     */
    public Map<String, String> validateRefreshToken(String refreshToken){
        try{
            RefreshTokenDto refreshTokenDto1 = getRefreshToken(refreshToken);
            String createdAccessToken = jwtTokenProvider.validateRefreshToken(refreshTokenDto1.getRefreshToken());
            return createRefreshJson(createdAccessToken);
        }catch (Exception e){
            log.error("refreshToken null2!");
            return null;
        }

    }
    
    /**
     * description    : refreshToken - 만들고 map에 Response데이터 추가
     * 2023-12-23   by  taejin       
     */
    public Map<String, String> createRefreshJson(String createdAccessToken){
        Map<String, String> map = new HashMap<>();

        if(createdAccessToken == ""){
            map.put("errortype", "Forbidden");
            map.put("status", "402");
            map.put("message", "Refresh 토큰이 만료되었습니다. 로그인이 필요합니다.");
            map.put("accessToken","");
            return map;
        }
        //기존에 존재하는 accessToken 제거

        map.put("status", "200");
        map.put("message", "Refresh 토큰을 통한 Access Token 생성이 완료되었습니다.");
        map.put("accessToken", createdAccessToken);

        return map;
    }

}