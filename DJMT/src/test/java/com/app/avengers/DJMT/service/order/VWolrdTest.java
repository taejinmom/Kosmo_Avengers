package com.app.avengers.DJMT.service.order;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.jupiter.api.Test;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

import static org.junit.jupiter.api.Assertions.*;

/**
 * packageName    : com.app.avengers.DJMT.service.order
 * fileName       : VWolrdTest
 * author         : Administrator
 * date           : 2024-02-18
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-02-18        Administrator       최초 생성
 */
class VWolrdTest {

    @Test
    void run() {

        String secretkey = "38DFA757-E21B-37A4-ACF1-E9A3FB309B38";
        String searchType = "parcel";
        String searchAddr = "서울특별시 관악구 봉천동";
        String epsg = "epsg:4326";

        StringBuilder sb = new StringBuilder("http://api.vworld.kr/req/address");
        sb.append("?service=address");
        sb.append("&request=getCoord");
        sb.append("&format=json");
        sb.append("&crs=" + epsg);
        sb.append("&key=" + secretkey);
        sb.append("&type=" + searchType);
        sb.append("&address=" + URLEncoder.encode(searchAddr, StandardCharsets.UTF_8));
        try{
            URL url = new URL(sb.toString());
            InputStreamReader is = new InputStreamReader(url.openStream(),StandardCharsets.UTF_8);
            BufferedReader reader = new BufferedReader(is);

            JSONParser jspa = new JSONParser();
            JSONObject jsob = (JSONObject) jspa.parse(reader);
            JSONObject jsrs = (JSONObject) jsob.get("response");
            JSONObject jsResult = (JSONObject) jsrs.get("result");
            JSONObject jspoitn = (JSONObject) jsResult.get("point");

            System.out.println(jspoitn.get("x"));
            System.out.println(jspoitn.get("y"));
        } catch (IOException | ParseException e) {
            throw new RuntimeException(e);
        }
    }
}