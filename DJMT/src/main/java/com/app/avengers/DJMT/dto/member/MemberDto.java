package com.app.avengers.DJMT.dto.member;


import com.app.avengers.DJMT.dto.auth.RoleDto;
import com.app.avengers.DJMT.dto.login.LoginHistoryDto;
import lombok.*;

import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
public class MemberDto {
    private String rownum;
    private String mem_no;
    private String login_id;
    private String login_pw;
    private String mem_name;
    private String mem_addr1;
    private String mem_addr2;
    private String mem_tel;
    private String mem_status;
    private String mem_gen;
    private String mem_birth;
    private String mem_birthYn;
    private RoleDto role;
    private String reg_id;
    private String reg_date;
    private String chg_id;
    private String chg_date;
    private String etc_param1;
    private String etc_param2;
    private String etc_param3;
    private String etc_param4;
    private String etc_param5;
    private String valid = "N";
    private String mem_profile;
    private LoginHistoryDto loginHistoryDto;

    public LoginHistoryDto getHistoryDto(){
        this.loginHistoryDto = new LoginHistoryDto();
        loginHistoryDto.setMem_no(this.getMem_no());
        loginHistoryDto.setReg_id(this.getMem_no());
        return loginHistoryDto;
    }
}
