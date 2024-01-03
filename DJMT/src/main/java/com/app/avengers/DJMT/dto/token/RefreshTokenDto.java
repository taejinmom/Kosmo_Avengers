package com.app.avengers.DJMT.dto.token;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class RefreshTokenDto {

    private String refreshToken_id;
    private String refreshToken;
    private String mem_no;
    private String ref_id;

}