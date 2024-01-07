package com.app.avengers.DJMT.mapper.member;

import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.dto.member.MemberResponseDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface MemberMapper {
    
    public MemberDto ValidateTokenByMemNo(String mem_no);// Token에서 회원정보 추출 시 사용
    public Optional<String> loginCheckPw(String login_id);// pw 체크를 위해 id로 패스워드 추출
    public void memberSave(MemberDto memberDto); // 회원가입
    public MemberDto getMemberInfoByLoginId(String login_id);
    public void start();
}
