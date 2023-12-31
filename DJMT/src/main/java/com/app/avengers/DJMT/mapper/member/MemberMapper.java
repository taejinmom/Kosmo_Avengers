package com.app.avengers.DJMT.mapper.member;

import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.dto.member.MemberResponseDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface MemberMapper {

    public MemberDto ValidateTokenByMemNo(String mem_no);
    public Optional<String> loginCheckPw(String login_id);
    public void memberSave(MemberDto memberDto);
    public MemberDto getMemberInfoByLoginId(String login_id);
    public void start();
    MemberDto findMemberById(String login_id);
}
