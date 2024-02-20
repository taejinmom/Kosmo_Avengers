package com.app.avengers.DJMT.service.order;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * packageName    : com.app.avengers.DJMT.service.order
 * fileName       : Geocode
 * author         : Administrator
 * date           : 2024-02-17
 * description    : 현재 주소로 경도, 위도 받는 openAPI
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-02-17        Administrator       최초 생성
 */
@Service
@NoArgsConstructor
public class VWolrd {
    @Value("${vworld.secretkey}")
    private String secretkey;
//    private String secretkey = "38DFA757-E21B-37A4-ACF1-E9A3FB309B38";
    String searchType = "parcel";
    String searchAddr = "삼평동 624";
    String epsg = "epsg:4326";
    JSONObject findByAddress(String address) {
        StringBuilder sb = new StringBuilder("https://api.vworld.kr/req/address");
        sb.append("?service=address");
        sb.append("&request=getCoord");
        sb.append("&format=json");
        sb.append("&crs=" + epsg);
        sb.append("&key=" + secretkey);
        sb.append("&type=" + "road");
        sb.append("&address=" + URLEncoder.encode(address, StandardCharsets.UTF_8));
        try{
            URL url = new URL(sb.toString());
            BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream(), StandardCharsets.UTF_8));

            JSONParser jspa = new JSONParser();
            JSONObject jsob = (JSONObject) jspa.parse(reader);
            JSONObject jsrs = (JSONObject) jsob.get("response");
            JSONObject jsResult = (JSONObject) jsrs.get("result");
            JSONObject jspoitn = (JSONObject) jsResult.get("point");

            System.out.println(jspoitn.get("x"));
            System.out.println(jspoitn.get("y"));
            Double[] arr = new Double[2];
            return (JSONObject) jsResult.get("point");
        } catch (IOException | ParseException e) {
            throw new RuntimeException(e);
        }
//        return "";
    }
}
