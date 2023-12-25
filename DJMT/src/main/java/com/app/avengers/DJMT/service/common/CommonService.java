package com.app.avengers.DJMT.service.common;
/**
 * packageName    : com.app.avengers.DJMT.service.common
 * fileName       : CommonService
 * author         : Administrator
 * date           : 2023-12-22
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2023-12-22        Administrator       최초 생성
 */


import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor

public class CommonService {
    private final PasswordEncoder passwordEncoder;

    public String makeUUID(String category){
        return category.concat(UUID.randomUUID().toString().replaceAll("-",""));
    }
    public String passwordEncoded(String password) { return passwordEncoder.encode(password); }
    public boolean passwordDecoded(String newPass,String oldPass){ return passwordEncoder.matches(newPass,oldPass); }
}
