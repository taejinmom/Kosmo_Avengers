package com.app.Gajago.dto.user;

import com.app.Gajago.dto.auth.RoleDto;
import lombok.*;


@Setter
@Getter
@NoArgsConstructor
public class UserDto {
    private String id;
    private String login_id;
    private String login_pw;
    private String name;
    private String email;
    private String phone;
    private String sex;
    private RoleDto role;
    private String address;
    private String check_value1;
    private String check_value2;
    private String check_value3;
    private String check_value4;
    private String check_value5;
    private String check_value6;

}
