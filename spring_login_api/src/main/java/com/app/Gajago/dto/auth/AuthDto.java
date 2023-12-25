package com.app.Gajago.dto.auth;

import com.app.Gajago.dto.user.UserDto;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class AuthDto {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String tokenType;
    private String accessToken;
    private String refreshToken;
    private UserDto userDto;
}
