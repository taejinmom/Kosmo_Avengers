package com.app.avengers.DJMT.mgr.member;

import com.app.avengers.DJMT.service.common.CommonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;

import static org.junit.jupiter.api.Assertions.*;



@Slf4j
@SpringBootTest
class MemberMgrTest {
    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    @Test
    void cuurentDate() {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        System.out.println(sdf.format(timestamp));
    }

    @Test
    void passwordValidation() {
        String inDbPassword = "$2a$10$CxFCXNz8Fh1gg7qVDH8EeOLDlkyHPWF4v5/Ef2CzK3WRvbZq3fimq";
        if(passwordEncoder.matches("1234",inDbPassword)){
            log.info("Success!!");
        }
;    }
    @Test
    void checkMethod() {

    }

}