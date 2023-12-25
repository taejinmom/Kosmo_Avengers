package com.app.Gajago.mapper.user;

import com.app.Gajago.dto.user.UserDto;
import com.app.Gajago.dto.user.UserResponseDto;
import org.apache.catalina.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.Optional;

@Mapper
public interface UserMapper {
    int loginCheck(UserDto user);
    void userInsert(UserDto user);
    String loginCheckById(String id);
    UserResponseDto getLoginUserByLoginId(String id);
    void start();

}
