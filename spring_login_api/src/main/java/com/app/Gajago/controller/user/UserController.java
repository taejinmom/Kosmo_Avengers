package com.app.Gajago.controller.user;

import com.app.Gajago.common.exception.ErrorCode;
import com.app.Gajago.common.exception.MyException;
import com.app.Gajago.config.JwtTokenProvider;
import com.app.Gajago.config.JwtTokenUtil;
import com.app.Gajago.dto.token.Token;
import com.app.Gajago.dto.user.UserDto;
import com.app.Gajago.dto.user.UserResponseDto;
import com.app.Gajago.service.exception.ExceptionService;
import com.app.Gajago.service.jwt.JwtService;
import com.app.Gajago.service.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;
@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {
    @Value("${spring.jwt.secret}")
    private String secretKey;
    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;
    private final JwtService jwtService;

    @GetMapping(value = {"/api", "/api/home"})
    public ResponseEntity<?> home(Model model, Authentication auth,@CookieValue String cookie) {
        log.info("auth >> " + auth);
        if(auth != null) {
            UserResponseDto loginUser = userService.getLoginUserByLoginId(auth.getName());
            if (loginUser != null) {
                model.addAttribute("", loginUser);
            }
            return new ResponseEntity<>(loginUser,HttpStatus.OK);
        }else{

        }

        return new ResponseEntity<>("토큰 만료",HttpStatus.INTERNAL_SERVER_ERROR);
    }

//    @PostMapping("/api/login")
//    public ResponseEntity<String> login(@RequestBody UserDto user) {
//        System.out.println("UserController.login");
//
//        if(userService.loginCheck(user) > 0){
//
//            long expireTimeMs = 1000 * 60 *2;     // Token 유효 시간 = 60분
//
//            String jwtToken = JwtTokenUtil.createToken(user.getLogin_id(), secretKey, expireTimeMs);
//
//            return new ResponseEntity<>(jwtToken,HttpStatus.OK);
////            return new ResponseEntity<>("yes",HttpStatus.OK);
//        }
//        System.out.println("false!");
//
//        return new ResponseEntity<>("틀렸다!!", HttpStatus.INTERNAL_SERVER_ERROR);
//    }
    @PostMapping("/api/userInsert")
    public ResponseEntity<String> userInsert(@RequestBody UserDto user) {
        System.out.println("UserController.userInsert");

        userService.userInsert(user);
        return new ResponseEntity<>("Success!", HttpStatus.OK);
    }


    @PostMapping("/api/login" )
    public ResponseEntity<?> test(@RequestBody UserDto user) {
        log.info("userid = {}", user.getLogin_id());
        if(userService.loginCheck(user) > 0) {
            UserResponseDto userResponseDto = userService.getLoginUserByLoginId(user.getLogin_id());
            Token tokenDto = jwtTokenProvider.createAccessToken(userResponseDto.getLogin_id());
            jwtService.login(tokenDto);
            return new ResponseEntity<> (tokenDto ,HttpStatus.OK);
        }
        return new ResponseEntity<>("Fail",HttpStatus.UNAUTHORIZED);
    }
    @PostMapping("/api/test/Login")
    String test1() {
        return "통과" ;
    }
}
