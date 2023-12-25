package com.app.avengers.DJMT.dto.member;

import com.app.avengers.DJMT.dto.auth.RoleDto;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberResponseDto {
    private String login_id;
    private String login_pw;
    private RoleDto role;


}
