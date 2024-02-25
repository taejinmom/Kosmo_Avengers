package com.app.avengers.DJMT.service.order;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import lombok.NoArgsConstructor;
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
//    @Value("${vworld.secretkey}")
//    private String secretkey;
    private String secretkey = "38DFA757-E21B-37A4-ACF1-E9A3FB309B38";
    String searchType = "parcel";
    String searchAddr = "삼평동 624";
    String epsg = "epsg:4326";
    public JSONObject findByEndAddress(String address) {
        String[] j = address.split(" ");

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

            return (JSONObject) jspoitn;
        } catch (IOException | ParseException e) {
            throw new RuntimeException(e);
        }
    }

    // 두 좌표 사이의 거리를 구하는 함수
    // dsitance(첫번쨰 좌표의 위도, 첫번째 좌표의 경도, 두번째 좌표의 위도, 두번째 좌표의 경도)
    public double distance(double lat1, double lon1, double lat2, double lon2){
        double theta = lon1 - lon2;
        double dist = Math.sin(deg2rad(lat1))* Math.sin(deg2rad(lat2)) + Math.cos(deg2rad(lat1))*Math.cos(deg2rad(lat2))*Math.cos(deg2rad(theta));
        dist = Math.acos(dist);
        dist = rad2deg(dist);
        dist = dist * 60*1.1515*1609.344;

        return dist; //단위 meter
    }

    //10진수를 radian(라디안)으로 변환
    public double deg2rad(double deg){
        return (deg * Math.PI/180.0);
    }
    //radian(라디안)을 10진수로 변환
    private static double rad2deg(double rad){
        return (rad * 180 / Math.PI);
    }
}
