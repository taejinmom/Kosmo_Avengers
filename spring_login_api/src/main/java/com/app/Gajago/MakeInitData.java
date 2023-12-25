package com.app.Gajago;

import com.app.Gajago.common.CommonService;
import com.app.Gajago.common.constants.Constants;
import com.app.Gajago.common.user.UserMgr;
import com.app.Gajago.dto.auth.RoleDto;
import com.app.Gajago.dto.user.UserDto;
import com.app.Gajago.repository.UserRepository;
import com.app.Gajago.service.user.UserService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;




@Component
@RequiredArgsConstructor
public class MakeInitData {

    private final UserRepository userRepository;
    @Autowired
    private final PasswordEncoder encoder;
    private final UserMgr userMgr;
    private final UserService userService;
    private final CommonService commonService;

    @PostConstruct
    public void makeAdminAndUser() {
        System.out.println("시작할때 " + encoder);
        userService.start();
        UserDto admin1 = new UserDto();
                admin1.setId(commonService.makeUUID(Constants.MEMBER));
                admin1.setLogin_id("admin1");
                admin1.setLogin_pw("1234");
                admin1.setName("관리자1");
                admin1.setRole(RoleDto.ADMIN);
                admin1.setEmail("");

        userRepository.userInsert(admin1);

        UserDto user1 = new UserDto();
                user1.setId(commonService.makeUUID(Constants.MEMBER));
                user1.setLogin_id("user1");
                user1.setLogin_pw("1234");
                user1.setName("사용자1");
                user1.setRole(RoleDto.ADMIN);
                user1.setEmail("");

        userRepository.userInsert(user1);

        UserDto admin2 = new UserDto();
                admin2.setId(commonService.makeUUID(Constants.MEMBER));
                admin2.setLogin_id("admin2");
                admin2.setLogin_pw("1234");
                admin2.setName("관리자2");
                admin2.setRole(RoleDto.ADMIN);
                admin2.setEmail("");

        userRepository.userInsert(admin2);
        UserDto user2 = new UserDto();
                user2.setId(commonService.makeUUID(Constants.MEMBER));
                user2.setLogin_id("user2");
                user2.setLogin_pw("1234");
                user2.setName("사용자2");
                user2.setRole(RoleDto.ADMIN);
                user2.setEmail("");

        userRepository.userInsert(user2);
    }
}
