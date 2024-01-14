package com.app.avengers.DJMT.service.member;

import com.app.avengers.DJMT.constants.Constants;
import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.mapper.member.MemberMapper;
import com.app.avengers.DJMT.mgr.member.MemberMgr;
import com.app.avengers.DJMT.repository.member.MemberRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Slf4j
@AllArgsConstructor
@Service
public class MemberService implements MemberRepository {

    private final MemberMapper memberMapper;
    private final MemberMgr memberMgr;

    /**
     * description    : 토큰 유효성 체크
     * 2024-01-07   by  taejin       
     */
    @Override
    public MemberDto ValidateTokenByMemNo(String mem_no) {
        return memberMapper.ValidateTokenByMemNo(mem_no);
    }

    /**
     * description    : 로그인 -> 패스워드 validation
     * 2023-12-22   by  taejin
     */
    @Override
    public MemberDto loginCheck(MemberDto memberDto) {
        // 패스워드 체크
        if(memberMgr.loginvalidation(
                memberDto.getLogin_pw(), loginCheckPw(memberDto.getLogin_id()).orElse(""))
            ){
            // 패스워드 체크 성공 시 member데이터 추출
            memberDto = memberMapper.getMemberInfoByLoginId(memberDto.getLogin_id());
            memberDto.setValid(Constants.COMMON_CONSTANTS_Y); // default = N
            return memberDto;
        }
        return null;
    }

    /**
     * description    : 입력된 패스워드와 비교할 패스워드를 login_id 로 조회하여 호출
     * 2023-12-22   by  taejin
     */
    @Override
    public Optional<String> loginCheckPw(String login_id) {
        return memberMapper.loginCheckPw(login_id);
    }

    /**
     * description    : 회원가입
     * 2023-12-22   by  taejin
     */
    @Override
    public void memberSave(MemberDto memberDto) {
        // memberDto 만들기 - uuid, 패스워드 인코딩, 가입날짜.. 등등  추가할 예정
        memberMapper.memberSave(memberMgr.makeMemberDto(memberDto));
    }

    /**
     * description    : myPage 데이터 출력
     * 2024-01-13   by  taejin       
     */
    public MemberDto getMemberInfoByMemNo(String mem_no){
        return memberMapper.getMemberInfoByMemNo(mem_no);
    }

    public void editMemberInfo(MemberDto memberDto){
        memberMapper.editMemberInfo(memberMgr.editMemberInfo(memberDto));
    }
    /**
     * description    : 사용자 더미 데이터 삭제(초기 개발시에만 사용)
     * 2023-12-22   by  taejin
     */
    @Override
    public void start() {
        memberMapper.start();
        log.info("delete 시작 ");
    }
}
