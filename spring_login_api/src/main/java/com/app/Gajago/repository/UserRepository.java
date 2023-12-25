package com.app.Gajago.repository;

import com.app.Gajago.dto.user.UserDto;
import com.app.Gajago.dto.user.UserResponseDto;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository {
    public int loginCheck(UserDto user);
    public void userInsert(UserDto user);
    public String loginCheckById(String id);
    public UserResponseDto getLoginUserByLoginId(String id);
    public void start();
}
