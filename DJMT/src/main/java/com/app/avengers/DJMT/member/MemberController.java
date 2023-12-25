package com.app.avengers.DJMT.member;


import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController("/api")
public class MemberController {

    @GetMapping("/test")
    public String test() {
        log.info("test");
        return "통과";
    }

}
