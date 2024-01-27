package com.app.avengers.DJMT.contoller.member;

import com.app.avengers.DJMT.config.jwt.JwtTokenProvider;
import com.app.avengers.DJMT.constants.Constants;
import com.app.avengers.DJMT.dto.login.LoginHistoryDto;
import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.dto.member.MemberResponseDto;
import com.app.avengers.DJMT.dto.token.TokenDto;
import com.app.avengers.DJMT.service.jwt.JwtService;
import com.app.avengers.DJMT.service.member.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.lang.reflect.Member;
import java.util.HashMap;
import java.util.List;
import java.util.Map;




@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class MemberController {
    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;
    private final JwtService jwtService;

    /**
     * description    : 로그인 액션
     * 2023-12-23   by  taejin
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody MemberDto memberDto) {
        log.info("userid = {}", memberDto.getLogin_id());
        try {
            HashMap<String,Object> map = new HashMap<>();
            // validation start
            memberDto = memberService.loginCheck(memberDto);
            if(memberDto.getValid().equals(Constants.COMMON_CONSTANTS_Y) && memberDto.getMem_status().equals(Constants.MEMBER_STATUS_1)){
                // login history update

                // 패스워드 체크 성공 , status = 1인 사용자 토큰 및 데이터 클라이언트로 전송
                TokenDto tokenDto = jwtTokenProvider.createAccessToken(memberDto.getMem_no(),memberDto.getRole());
                jwtService.login(tokenDto);
                map.put("tokenData",tokenDto);
                map.put("mem_no",memberDto.getMem_no());
                map.put("role",memberDto.getRole());

                log.info("로그인 성공 >>> " + memberDto.getLogin_id() + "/ " + memberDto.getMem_name());
            }
            return new ResponseEntity<>(map,HttpStatus.OK);
        }catch (NullPointerException e){
            log.error("로그인 실패!! ");
        }
        return new ResponseEntity<>(Constants.RESPONSE_FAIL,HttpStatus.UNAUTHORIZED);
    }
    /**
     * description    : 회원가입 액션
     * 2023-12-23   by  taejin       
     */
    @PostMapping("/join")
    public ResponseEntity<?> join(@RequestBody MemberDto memberDto, LoginHistoryDto loginHistoryDto){
        String result = "Success";
        try {
            memberService.memberSave(memberDto, loginHistoryDto);
            log.info(("회원가입 성공 " + memberDto.getLogin_id()));
            return new ResponseEntity<>(result, HttpStatus.OK);
        }catch (DuplicateKeyException e){
            result = "DuplicateKeyException";
        }catch (NullPointerException e){
            result = "NullPointerException";
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("/member/myPage")
    public ResponseEntity<?> myPage(@RequestBody Map<String,String> map){
        try {
            MemberDto memberDto = memberService.getMemberInfoByMemNo(map.get("mem_no"));
            return new ResponseEntity<>(memberDto,HttpStatus.OK);
        }catch (NullPointerException e){
            return new ResponseEntity<>(Constants.RESPONSE_FAIL,HttpStatus.BAD_REQUEST);
        }

    }
    /**
     * description    : 회원정보 수정
     * 2024-01-13   by  taejin       
     */
    @PostMapping("/editMemberInfo")
    public ResponseEntity<?> editMemberInfo(@RequestBody MemberDto memberDto){
        try{
            memberService.editMemberInfo(memberDto);
            log.info("editMemberInfo >> " + memberDto.getEtc_param1());
            log.info("editMemberInfo >> 회원정보 수정! "+ memberDto.getMem_name());
            return new ResponseEntity<>(Constants.RESPONSE_SUCCESS,HttpStatus.OK);
        }catch (Exception e){
            log.error(e.getMessage());
            return new ResponseEntity<>(Constants.RESPONSE_SUCCESS,HttpStatus.OK);
        }
    }

    @GetMapping("/admin/selectMemberList")
    public ResponseEntity<?> selectMemberList() {
        List<MemberDto> memberList = memberService.selectMemberList();
        return new ResponseEntity<>(memberList,HttpStatus.OK);
    }

    @PostMapping("/admin/deleteMember")
    public ResponseEntity<?> deleteMember(@RequestBody HashMap<String, String> map) {

        return new ResponseEntity<>(memberService.adminDeleteMember(map.get("mem_no")),HttpStatus.OK);
    }
    @GetMapping("/getTest")
    public String getTest(){
        return "OK";
    }
    @PostMapping("/postTest")
    public String postTest(@RequestBody HashMap<String,Object> map){
        log.info("postTest >>> " + map);
        return "OK";
    }

}
