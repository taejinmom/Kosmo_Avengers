package com.app.Gajago.dto.token;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RefreshTokenDto {

    private String refreshTokenId;

    private String refreshToken;

    private String keyId;
    private String refId;

}