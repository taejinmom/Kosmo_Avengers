package com.app.Gajago.common;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class CommonService {

    private final PasswordEncoder passwordEncoder;

    public String makeUUID(String category){
        return category.concat(UUID.randomUUID().toString().replaceAll("-",""));
    }
    public String passwordEncoded(String password) { return passwordEncoder.encode(password); }
    public boolean passwordDecoded(String newPass,String oldPass){ return passwordEncoder.matches(newPass,oldPass); }
}
