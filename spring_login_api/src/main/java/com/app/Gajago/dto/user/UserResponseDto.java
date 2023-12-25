package com.app.Gajago.dto.user;

import com.app.Gajago.dto.auth.RoleDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class UserResponseDto {
    private String login_id;
    private String name;
    private RoleDto role;
}
