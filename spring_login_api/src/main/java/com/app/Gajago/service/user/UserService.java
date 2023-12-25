package com.app.Gajago.service.user;


import com.app.Gajago.common.CommonService;
import com.app.Gajago.common.constants.Constants;
import com.app.Gajago.common.exception.MyException;
import com.app.Gajago.common.user.UserMgr;
import com.app.Gajago.dto.user.UserDto;
import com.app.Gajago.dto.user.UserResponseDto;
import com.app.Gajago.mapper.user.UserMapper;
import com.app.Gajago.repository.UserRepository;
import com.app.Gajago.service.exception.ExceptionService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.binding.BindingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements UserRepository {
    private final UserMapper userMapper;
    private final CommonService commonService;

    @Override
    public int loginCheck(UserDto user) {
        try {
            String checkId = user.getLogin_id();
            String oldPass = loginCheckById(checkId);
            String newPass = user.getLogin_pw();
            if(!commonService.passwordDecoded(newPass,oldPass)){
                return 0;
            }
        }catch(Exception e){
            return 0;
        }
        return 1;
    }

    @Override
    public void userInsert(UserDto user) {
        System.out.println("UserService.userInsert >>> " + user);
        String password = commonService.passwordEncoded(user.getLogin_pw());
        String uuid = commonService.makeUUID(Constants.MEMBER);
        user.setId(uuid);
        user.setLogin_pw(password);
        userMapper.userInsert(user);
    }

    @Override
    public String loginCheckById(String id) {
        return userMapper.loginCheckById(id);
    }

    @Override
    public UserResponseDto getLoginUserByLoginId(String id) {
        return userMapper.getLoginUserByLoginId(id);
    }

    @Override
    public void start() {
        userMapper.start();
    }


}
