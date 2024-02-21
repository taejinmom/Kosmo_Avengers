package com.app.avengers.DJMT.service.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

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
@Slf4j
@RequiredArgsConstructor
class VWolrdTest {

    @Test
    void run() {
        VWolrd vWolrd = new VWolrd();
        double x = 126.9596010873484;
        double y =  37.491694413809384;
        String secretkey = "38DFA757-E21B-37A4-ACF1-E9A3FB309B38";
        String searchType = "parcel";
        String searchAddr = "서울특별시 서초구 서초동";
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

            System.out.println(vWolrd.distance(x,y,Double.parseDouble(jspoitn.get("x").toString()),Double.parseDouble(jspoitn.get("y").toString())) / (40 * 1000 / 60) + "분");
        } catch (IOException | ParseException e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    void orderTest2() {
        VWolrd vWolrd = new VWolrd();
        double x = 126.9596010873484;
        double y =  37.491694413809384;
//        String secretkey = "38DFA757-E21B-37A4-ACF1-E9A3FB309B38";
//        String searchType = "parcel";
//        String searchAddr = "서울특별시 서초구 서초동";
//        String epsg = "epsg:4326";

        JSONObject coordinate; //
        //https://tmapapi.sktelecom.com/main.html#webservice/sample/WebSampleRoutes 참고하기
        //https://se-jung-h.tistory.com/entry/%EC%9E%90%EB%B0%94intelij-%EC%A2%8C%ED%91%9C%EC%9C%84%EB%8F%84%EA%B2%BD%EB%8F%84%EB%A1%9C-%EC%8B%A4%EC%A0%9C-%EA%B1%B0%EB%A6%AC-%EA%B5%AC%ED%95%98%EA%B8%B0
        // 시간 = 거리 % 속력
        double end_lat; // 경도
        double end_lng; // 위도

        // 목적지 좌표 endXY
        coordinate = vWolrd.findByEndAddress("서울특별시 종로구 무악동");
        end_lat = Double.parseDouble(coordinate.get("x").toString());
        end_lng = Double.parseDouble(coordinate.get("y").toString());
        vWolrd.distance(x,y, end_lat,end_lng);
        // 소요시간
        int distance = (int)Math.ceil(vWolrd.distance(x, y, end_lat, end_lng) / (40 * 1000 / 3600));

        new Thread(new Runnable() {
            @Override
            public void run() {
                for(int i = 0; i < distance; i++) {
                    try {
                        Thread.sleep(500);
                        if(i==(distance * 0.2)){
                            log.info("20퍼");
                        } else if (i > (distance * 0.8)) {
                            log.info("80퍼");
                        } else if (i == distance) {
                            log.info("배송완료");
                        }
                        System.out.println("second >>> " + i);
                        i++;
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        }).start();
    }
}