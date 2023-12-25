package com.app.Gajago.mapper.token;

import com.app.Gajago.dto.token.RefreshTokenDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface RefreshTokenMapper {
    public int existsByKeyId(String login_id);
    public void deleteByKeyId(String login_id);
    public void saveToken(RefreshTokenDto refreshTokenDto);
    public RefreshTokenDto findByRefreshToken(String refreshToken);
}
