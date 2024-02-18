package com.app.avengers.DJMT.repository.process;

import org.springframework.stereotype.Repository;

import java.util.HashMap;

/**
 * packageName    : com.app.avengers.DJMT.repository.process
 * fileName       : Process
 * author         : Administrator
 * date           : 2024-02-18
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-02-18        Administrator       최초 생성
 */

@Repository
public interface Process {
    public void excute(HashMap<String, String> map);
    public void afterEventHandler();
}
