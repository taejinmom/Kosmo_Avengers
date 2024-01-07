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


import com.fasterxml.uuid.EthernetAddress;
import com.fasterxml.uuid.Generators;
import com.fasterxml.uuid.impl.TimeBasedGenerator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.ByteBuffer;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor

public class CommonService {
    private final PasswordEncoder passwordEncoder;

    public String makeUUID(String category){
        return category.concat(UUID.randomUUID().toString().replaceAll("-",""));
    }
    public String generateUUID(String catId) {

        // RFC 4122 variant 2, version 1 방식으로 생성된 UUID를 반환
        TimeBasedGenerator uuidV1Generator = Generators.timeBasedGenerator(EthernetAddress.fromInterface());
        UUID uuid = uuidV1Generator.generate();

        // 또는 RFC 4122 version 4 방식으로 생성된 UUID를 반환
        uuid = Generators.randomBasedGenerator().generate();

        // URL에 포함될 수 있는 Base64 문자열로 변환
        ByteBuffer uuidBytes = ByteBuffer.wrap(new byte[16]);
        uuidBytes.putLong(uuid.getMostSignificantBits());
        uuidBytes.putLong(uuid.getLeastSignificantBits());

        return catId.concat(org.apache.commons.codec.binary.Base64.encodeBase64URLSafeString(uuidBytes.array()));
    }
    public String passwordEncoded(String password) {
        return passwordEncoder.encode(password);
    }
    public boolean passwordDecoded(String newPass,String oldPass){
        return passwordEncoder.matches(newPass,oldPass);
    }

}
