package com.app.avengers.DJMT.repository.member;

import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.dto.member.MemberResponseDto;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository {
    public MemberDto ValidateTokenByMemNo(String mem_no); // 사용자 id로 response용
    public MemberDto loginCheck(MemberResponseDto memberResponseDto); // 로그인 시 id, pw 로 조회
    public Optional<String> loginCheckPw(String login_id); // loginCheck -> 패스워드 체크
    public void memberSave(MemberDto memberDto); // 회원가입
    public MemberDto getMemberInfoByLoginId(String mem_no); // 사용자 id로 member 호출
    public void start(); // 개발용 member delete
}
