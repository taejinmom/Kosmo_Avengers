package com.app.avengers.DJMT.dto.notice;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
public class NoticeDto {
    private long ntc_no;
    private String ntc_title;
    private String ntc_comm;
    private String ntc_status; // char(1) default '1',
    private String ntc_cate;  // 1 공지 2 이벤트 3 자주하는 질문(FAQ) ?
    private String reg_id;  // 등록한 회원
    private String reg_date;  // 생성 날짜
    private String chg_id;  //변경한 회원
    private String chg_date;  // 변경 날짜

    public void toDto(Map<String ,String> map){
        map.forEach((key, value)->{

        });
    }
}