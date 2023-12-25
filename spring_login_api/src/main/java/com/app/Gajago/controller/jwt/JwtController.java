package com.app.Gajago.controller.jwt;

import com.app.Gajago.service.jwt.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@Slf4j
@RequiredArgsConstructor
public class JwtController {
    private final JwtService jwtService;
    @PostMapping("/api/refresh")
    public ResponseEntity<?> validateRefreshToken(@RequestBody Map<String,String> refreshToken, HttpServletRequest req){

        log.info("refresh controller 실행");
        Map<String, String> map = jwtService.validateRefreshToken(refreshToken.get("refreshToken"));

        if(map.get("status").equals("402")){
            log.info("RefreshController - Refresh Token이 만료.");
            return new ResponseEntity<>("Refresh Token이 만료", HttpStatus.UNAUTHORIZED);
        }

        log.info("RefreshController - Refresh Token이 유효.");
        return new ResponseEntity<>(map.get("accessToken"), HttpStatus.OK);

    }
}
