package com.app.Gajago.repository;

import com.app.Gajago.dto.token.RefreshTokenDto;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository {
    public boolean existsByKeyId(String login_id);
    public RefreshTokenDto deleteByKeyId(String login_id);
    public void saveToken(RefreshTokenDto refreshTokenDto);
    public Optional<RefreshTokenDto> findByRefreshToken(String refreshToken);
}
