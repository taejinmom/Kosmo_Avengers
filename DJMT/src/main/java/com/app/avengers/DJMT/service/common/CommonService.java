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


import com.fasterxml.uuid.Generators;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.ByteBuffer;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor

public class CommonService {
    private final PasswordEncoder passwordEncoder;



    public String makeUUID(String category){
        return category.concat(UUID.randomUUID().toString().replaceAll("-",""));
    }
    public String generateUUID(String systemId) {
        UUID uuid;
        // RFC 4122 variant 2, version 1 방식으로 생성된 UUID를 반환
//        TimeBasedGenerator uuidV1Generator = Generators.timeBasedGenerator(EthernetAddress.fromInterface());
//        uuid = uuidV1Generator.generate();
        // 또는 RFC 4122 version 4 방식으로 생성된 UUID를 반환
        uuid = Generators.randomBasedGenerator().generate();

        // URL에 포함될 수 있는 Base64 문자열로 변환
        ByteBuffer uuidBytes = ByteBuffer.wrap(new byte[16]);
        uuidBytes.putLong(uuid.getMostSignificantBits());
        uuidBytes.putLong(uuid.getLeastSignificantBits());

        return systemId.concat(Generators.timeBasedGenerator().generate().toString().replaceAll("-", "").toUpperCase());
    }

    public String passwordEncoded(String password) {
        return passwordEncoder.encode(password);
    }
    public boolean passwordDecoded(String newPass,String oldPass){
        return passwordEncoder.matches(newPass,oldPass);
    }

    /**
     * description    : 현재 시간 출력
     * 2024-02-04   by  taejin       
     */
    public String currentDate(){
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
        return sdf.format(timestamp);
    }
//    public Map<String,String> maintenanceMapToString(HashMap<String,Object> map){
//        HashMap<String,String> newMap = map.entrySet().stream()
//                .collect((Collectors.toMap(Map.Entry::getKey, e-> (String)e.getValue())));
//        return newMap;
//    }
    public HashMap<String, String> checkAndTransform(Map<String, Object> inputMap) {
        HashMap<String, String> result = new HashMap<>();
        for (Map.Entry<String, Object> entry : inputMap.entrySet()) {
            try {
                result.put(entry.getKey(), (String) entry.getValue());
            } catch (ClassCastException e) {
                throw e; // or a required error handling
            }
        }
        return result;
    }
}
