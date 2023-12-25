package com.app.avengers.DJMT.mapper.token;

import com.app.avengers.DJMT.dto.token.RefreshTokenDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface RefreshTokenMapper {
    public int existsByKeyId(String login_id);
    public void deleteByKeyId(String login_id);
    public void saveToken(RefreshTokenDto refreshTokenDto);
    public RefreshTokenDto findByRefreshToken(String refreshToken);
}
