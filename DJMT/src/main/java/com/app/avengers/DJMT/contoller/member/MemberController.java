package com.app.avengers.DJMT.contoller.member;

import com.app.avengers.DJMT.config.jwt.JwtTokenProvider;
import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.dto.member.MemberResponseDto;
import com.app.avengers.DJMT.dto.token.TokenDto;
import com.app.avengers.DJMT.service.member.MemberService;
import com.app.avengers.DJMT.service.jwt.JwtService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RestController
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;
    private final JwtService jwtService;

    /**
     * description    : 로그인 액션
     * 2023-12-23   by  taejin
     */
    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody MemberResponseDto memberResponseDto) {
        log.info("userid = {}", memberResponseDto.getLogin_id());
        try {
            MemberDto memberDto = memberService.loginCheck(memberResponseDto);
            if (memberDto != null) {
                TokenDto tokenDto = jwtTokenProvider.createAccessToken(memberDto.getMem_no(), memberDto.getRole(), memberDto.getMem_name());
                jwtService.login(tokenDto);
                return new ResponseEntity<>(tokenDto, HttpStatus.OK);
            }
        }catch (NullPointerException e){
            e.printStackTrace();
            log.error("로그인 실패 memberDto => null");
        }
        return new ResponseEntity<>("fail",HttpStatus.UNAUTHORIZED);
    }
    /**
     * description    : 회원가입 액션
     * 2023-12-23   by  taejin       
     */
    @PostMapping("/api/join")
    public ResponseEntity<?> join(@RequestBody MemberDto memberDto){
        memberService.memberSave(memberDto);
        return new ResponseEntity<> ("회원가입" ,HttpStatus.OK);
    }
    @PostMapping("/test")
    public ResponseEntity<?> test(@RequestBody MemberResponseDto memberDto){
        String newPass = memberDto.getLogin_pw();
        String oldPass = memberService.loginCheckPw(memberDto.getLogin_id()).orElse("");
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        if(passwordEncoder.matches(newPass,oldPass)){
            log.info("success!!");
            return new ResponseEntity<> ("Ok" ,HttpStatus.OK);
        }
        return new ResponseEntity<> ("Fail" ,HttpStatus.UNAUTHORIZED);
    }


}
