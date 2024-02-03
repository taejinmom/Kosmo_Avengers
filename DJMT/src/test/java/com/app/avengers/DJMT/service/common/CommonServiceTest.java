package com.app.avengers.DJMT.service.common;

import com.fasterxml.uuid.Generators;
import org.junit.jupiter.api.Test;

import java.nio.ByteBuffer;
import java.util.UUID;

import static org.apache.commons.codec.binary.Base64.encodeBase64URLSafeString;
import static org.junit.jupiter.api.Assertions.*;

/**
 * packageName    : com.app.avengers.DJMT.service.common
 * fileName       : CommonServiceTest
 * author         : Administrator
 * date           : 2024-01-13
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-01-13        Administrator       최초 생성
 */
class CommonServiceTest {

    @Test
    public void generateUUID() {
        String catId = "MEM";
        UUID uuid;
        // RFC 4122 variant 2, version 1 방식으로 생성된 UUID를 반환
//        TimeBasedGenerator uuidV1Generator = Generators.timeBasedGenerator(EthernetAddress.fromInterface());
//        uuid = uuidV1Generator.generate();
        // 또는 RFC 4122 version 4 방식으로 생성된 UUID를 반환
//        uuid = Generators.randomBasedGenerator().generate();
//
//        // URL에 포함될 수 있는 Base64 문자열로 변환
//        ByteBuffer uuidBytes = ByteBuffer.wrap(new byte[16]);
//        uuidBytes.putLong(uuid.getMostSignificantBits());
//        uuidBytes.putLong(uuid.getLeastSignificantBits());

        int count = 0;
        for(int i = 0 ; i < 1000; i++){
            uuid = Generators.randomBasedGenerator().generate();

            // URL에 포함될 수 있는 Base64 문자열로 변환
            ByteBuffer uuidBytes = ByteBuffer.wrap(new byte[16]);
            uuidBytes.putLong(uuid.getMostSignificantBits());
            uuidBytes.putLong(uuid.getLeastSignificantBits());
            String uid = catId.concat(encodeBase64URLSafeString(uuidBytes.array()).toLowerCase());
            if(uid.contains("_")||uid.contains("-")) {
                count++;
            }
            System.out.println("id >> " + uid);
            }
        System.out.println("총 " +count+"번" );
    }
}
