package com.app.avengers.DJMT.service.order;

import com.app.avengers.DJMT.repository.process.Process;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
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
public class OrderProcess extends Thread implements Process {

    private final VWolrd vWolrd;

    @Override
    public synchronized void start() {
        try {
            int count=0;
            while(true) {
                System.out.print(count++);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            System.out.print("Interrupted!!!!!");
        }
    }

    @Override
    public void excute(HashMap<String, String> map) {
        vWolrd.findByAddress(map.get("address"));
    }

    @Override
    public void afterEventHandler() {

    }
}
