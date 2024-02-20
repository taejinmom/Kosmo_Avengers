package com.app.avengers.DJMT.service.order;

import com.app.avengers.DJMT.repository.process.Process;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;

import java.util.HashMap;

/**
 * packageName    : com.app.avengers.DJMT.repository.order
 * fileName       : OrderProcess
 * author         : Administrator
 * date           : 2024-02-17
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-02-17        Administrator       최초 생성
 */

@Slf4j
@RequiredArgsConstructor
public  class OrderProcess extends Thread implements Process {

    private final VWolrd vWolrd;
    private double x = 126.9596010873484;
    private double y =  37.491694413809384;
    @Override
    public void excute(HashMap<String, String> map) {
        JSONObject coordinate; //
        //https://tmapapi.sktelecom.com/main.html#webservice/sample/WebSampleRoutes 참고하기
        //https://se-jung-h.tistory.com/entry/%EC%9E%90%EB%B0%94intelij-%EC%A2%8C%ED%91%9C%EC%9C%84%EB%8F%84%EA%B2%BD%EB%8F%84%EB%A1%9C-%EC%8B%A4%EC%A0%9C-%EA%B1%B0%EB%A6%AC-%EA%B5%AC%ED%95%98%EA%B8%B0
        // 시간 = 거리 % 속력
        double end_lat; // 경도
        double end_lng; // 위도

        // 목적지 좌표 endXY
        coordinate = vWolrd.findByEndAddress(map.get("address"));
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
                        Thread.sleep(1000);
                        if(i==distance/2){
                            log.info("반");
                        }
                        i++;
                    } catch (InterruptedException e) {
                        throw new RuntimeException(e);
                    }
                }
            }
        }).start();
    }

    @Override
    public void beforeEventHandler() {

    }
    @Override
    public void afterEventHandler() {

    }
}
