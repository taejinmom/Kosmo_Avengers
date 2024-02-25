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


import com.app.avengers.DJMT.dto.file.VolumeContainer;
import com.app.avengers.DJMT.dto.file.VolumeDto;
import com.app.avengers.DJMT.mapper.file.FileMapper;
import com.app.avengers.DJMT.mgr.file.FileMgr;
import com.fasterxml.uuid.Generators;
import com.google.code.geocoder.Geocoder;
import com.google.code.geocoder.GeocoderRequestBuilder;
import com.google.code.geocoder.model.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Arrays;
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

    //10진수를 radian(라디안)으로 변환
    public double deg2rad(double deg){
        return (deg * Math.PI/180.0);
    }
    //radian(라디안)을 10진수로 변환
    private double rad2deg(double rad){
        return (rad * 180 / Math.PI);
    }
    /**
     * description    : 두 좌표 사이 거리
     * 2024-02-17   by  taejin       
     */
    public double distance(double lat1, double lon1, double lat2, double lon2){
        double theta = lon1 - lon2;
        double dist = Math.sin(deg2rad(lat1))* Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1))*Math.cos(deg2rad(lat2))*Math.cos(deg2rad(theta));
        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist * 60*1.1515*1609.344;

        return dist; //단위 meter
    }
    


}
