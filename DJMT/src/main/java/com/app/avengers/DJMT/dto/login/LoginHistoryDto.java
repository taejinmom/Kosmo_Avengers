package com.app.avengers.DJMT.dto.login;

import lombok.Getter;
import lombok.Setter;

/**
 * packageName    : com.app.avengers.DJMT.dto.login
 * fileName       : LoginHistory
 * author         : Administrator
 * date           : 2024-01-27
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-01-27        Administrator       최초 생성
 */

@Getter
@Setter
public class LoginHistoryDto {
    private String mem_hist_no;
    private String mem_no;
    private String reg_id;
    private String login_date;
    private String logout_date;

}
