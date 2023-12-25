package com.app.avengers.DJMT.repository.token;

import com.app.avengers.DJMT.dto.token.RefreshTokenDto;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository {
    public boolean existsByKeyId(String login_id);
    public RefreshTokenDto deleteByKeyId(String login_id);
    public void saveToken(RefreshTokenDto refreshTokenDto);
    public Optional<RefreshTokenDto> findByRefreshToken(String refreshToken);
}
