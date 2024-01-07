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

    /**
     * description    : http 요청을 여기서 먼저 체크 (Cookies 에서 토큰 제어)
     * 2024-01-06   by  taejin
     */
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
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
            // 토큰에서 member 객체 추출 후 인증절차 진행
            Authentication authentication = jwtTokenProvider.getAuthentication(cookie.getValue());
            // SecurityContext 에 Authentication 객체를 저장
            SecurityContextHolder.getContext().setAuthentication(authentication);
            chain.doFilter(request, response);
        }else{
            chain.doFilter(request, response);
        }
    }
}
