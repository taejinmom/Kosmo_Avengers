package com.app.avengers.DJMT.mapper.member;

import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.dto.member.MemberResponseDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface MemberMapper {

    public MemberResponseDto getLoginUserByLoginId(String login_id); // 토큰에서
    public int loginCheck(MemberResponseDto memberResponseDto);
    public Optional<String> loginCheckPw(String login_id);
    public void memberSave(MemberDto memberDto);
    public void start();
}
