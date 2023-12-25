package com.app.avengers.DJMT.dto.member;


import com.app.avengers.DJMT.dto.auth.RoleDto;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class MemberDto {
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


}
