package com.app.avengers.DJMT.mgr.member;


import com.app.avengers.DJMT.constants.Constants;
import com.app.avengers.DJMT.dto.auth.RoleDto;
import com.app.avengers.DJMT.dto.login.LoginHistoryDto;
import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.service.common.CommonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;

@Slf4j
@Component
@RequiredArgsConstructor
public class MemberMgr {
    private final CommonService commonService;

    /**
     * description    : passwrdDecoded로 인코딩 된 패스워드와 인코딩 되지 않은 패스워드를 복호화 거치지 않고 검증
     * 2023-12-22   by  taejin
     */
    public boolean loginvalidation(String newPass,String oldPass){
        return commonService.passwordDecoded(newPass, oldPass);
    }
    /**
     * description    : MemberDto 세팅.. 여러가지 추가 예정
     * 2023-12-22   by  taejin       
     */
    public MemberDto makeMemberDto(MemberDto memberDto, LoginHistoryDto loginHistoryDto){
        // 선언
        // 회원
        String mem_no = commonService.generateUUID(Constants.MEMBER);
        String currentPassword = memberDto.getLogin_pw();
        String encodingPassword = commonService.passwordEncoded(currentPassword);

        // 히스토리
        String history_no = commonService.generateUUID(Constants.MEM_HISTORY);
        // dto 세팅
        memberDto.setMem_no(mem_no);
        memberDto.setLogin_pw(encodingPassword);
        if(memberDto.getRole() == null){
            memberDto.setRole(RoleDto.USER);
        }
        memberDto.setMem_status(Constants.MEMBER_STATUS_1);
        memberDto.setReg_id(mem_no);
        memberDto.setReg_date(currentDate());
        memberDto.setChg_id(mem_no);
        memberDto.setChg_date(currentDate());

        loginHistoryDto.setMem_no(memberDto.getMem_no());
        loginHistoryDto.setMem_hist_no(history_no);
        loginHistoryDto.setReg_id(memberDto.getMem_no());
        loginHistoryDto.setLogin_date("");
        loginHistoryDto.setLogout_date("");
        return memberDto;
    }
    /**
     * description    : 현재 시간 출력
     * 2023-12-23   by  taejin       
     */
    public String currentDate(){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        return sdf.format(timestamp);
    }
    /**
     * description    : 회원 정보 수정
     * 2024-01-21   by  taejin       
     */
    public MemberDto editMemberInfo(MemberDto memberDto) {
//        if(memberDto.getEtc_param1().equals("true")){
            memberDto.setLogin_pw(commonService.passwordEncoded(memberDto.getLogin_pw()));
//        }
        memberDto.setChg_date(currentDate());
        memberDto.setChg_id(memberDto.getChg_id());
        return memberDto;
    }
}
