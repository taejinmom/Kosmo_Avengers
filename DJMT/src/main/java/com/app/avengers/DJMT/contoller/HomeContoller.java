package com.app.avengers.DJMT.contoller;

import com.app.avengers.DJMT.constants.Constants;
import com.app.avengers.DJMT.dto.token.RefreshTokenDto;
import com.app.avengers.DJMT.service.jwt.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@Slf4j
@RequiredArgsConstructor
public class HomeContoller {
    private final JwtService jwtService;
    @GetMapping("/api/validateToken")
    public ResponseEntity<?> validateToken(){
        log.info("HomeContoller - validateToken accessToken 검증 성공 - 24");
        return new ResponseEntity<> (Constants.RESPONSE_SUCCESS,HttpStatus.OK);
    }
    @PostMapping("/api/refresh")
    public ResponseEntity<?> validateRefreshToken(@RequestBody RefreshTokenDto refreshToken){

        log.info("refreshToken 검증 후 재발급 프로세스 실행");
        Map<String, String> map = jwtService.validateRefreshToken(refreshToken);

        if(map.get("status").equals("402")){
            log.info("RefreshController - Refresh Token이 만료.");
            return new ResponseEntity<>(Constants.RESPONSE_FAIL, HttpStatus.PAYMENT_REQUIRED);
        }

        return new ResponseEntity<>(map.get("accessToken"), HttpStatus.OK);

    }
}
