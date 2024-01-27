package com.app.avengers.DJMT;

import com.app.avengers.DJMT.dto.auth.RoleDto;
import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.service.member.MemberService;
import com.app.avengers.DJMT.service.common.CommonService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;


@Component
@RequiredArgsConstructor
public class MakeInitData {
    private final MemberService memberService;
    private final CommonService commonService;

    /**
     * description    : 사용자 더미데이터 (초기 개발에만 사용)
     * admin1   1234    / admin2    1234
     * 2023-12-22   by  taejin
     */
//    @PostConstruct
//    public void makeAdminAndUser() {
//        memberService.start();
//        MemberDto admin1 = new MemberDto();
//        admin1.setLogin_id("admin1");
//        admin1.setMem_name("관리자1");
//        admin1.setLogin_pw("1234");
//        admin1.setMem_gen("F");
//        admin1.setMem_addr1("서울특별시 관악구 봉천동 1637");
//        admin1.setMem_addr2("205호");
//        admin1.setRole(RoleDto.ADMIN);
//        memberService.memberSave(admin1);
//
//        MemberDto admin2 = new MemberDto();
//        admin2.setLogin_id("admin2");
//        admin2.setMem_name("관리자2");
//        admin2.setLogin_pw("1234");
//        admin2.setMem_gen("M");
//        admin2.setMem_addr1("서울특별시 관악구 봉천동 1677");
//        admin2.setMem_addr2("202호");
//        admin2.setRole(RoleDto.ADMIN);
//        memberService.memberSave(admin2);
//    }
}
