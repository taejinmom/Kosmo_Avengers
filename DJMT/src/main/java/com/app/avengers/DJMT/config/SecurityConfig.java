package com.app.avengers.DJMT.config;

import com.app.avengers.DJMT.config.jwt.JwtAuthenticationFilter;
import com.app.avengers.DJMT.config.jwt.JwtTokenProvider;
import com.app.avengers.DJMT.dto.auth.RoleDto;
import com.app.avengers.DJMT.service.member.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * Token Login에 사용하는 Security Config
 */
@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtTokenProvider jwtTokenProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        return httpSecurity
                .httpBasic(HttpBasicConfigurer ::disable) // ui가아닌 토큰인증
                .csrf(CsrfConfigurer::disable) //
                .cors(Customizer.withDefaults()) //
                .sessionManagement(httpSecuritySessionManagementConfigurer ->
                        httpSecuritySessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeRequests(
                        authorize ->
                                authorize
                                .requestMatchers("/api/join","/api/login","/api/postTest").permitAll()
                                .requestMatchers("/api/validateToken").authenticated() // 권한 체크 시 실패할경우 실행
                                //.requestMatchers("/api/refresh").permitAll()
                                .requestMatchers("/api/admin/**").hasAuthority(RoleDto.ADMIN.name())
                                .requestMatchers("/api/member/**").hasAuthority(RoleDto.USER.name())
                                .anyRequest().permitAll()
                )
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider),UsernamePasswordAuthenticationFilter.class)
                .build();
    }

}
