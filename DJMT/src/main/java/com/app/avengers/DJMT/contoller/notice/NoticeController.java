package com.app.avengers.DJMT.contoller.notice;

import com.app.avengers.DJMT.dto.notice.NoticeDto;
import com.app.avengers.DJMT.service.notice.NoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class NoticeController {
    private final NoticeService noticeService;
    @GetMapping("/api/noticeList")
    public ResponseEntity<?> noticeList(){
        List<NoticeDto> noticeDtoList = noticeService.getNoticeList();
        return new ResponseEntity<>(noticeDtoList, HttpStatus.OK);
    }

    @GetMapping("/api/noticeDetail")
    public ResponseEntity<?> noticeDetail(@RequestParam("ntc_no") long ntc_no){
        System.out.println(">>>> ntc_no =>"+ntc_no);
        NoticeDto noticeDtoDetail = noticeService.getNoticeInfoByNtcNo(ntc_no);
        System.out.println(">>>> noticeDtoDetail =>"+noticeDtoDetail);
        return new ResponseEntity<>(noticeDtoDetail, HttpStatus.OK);
    }

    @PostMapping("/api/insertNotice")
    public ResponseEntity<?> insertNotice(@RequestBody NoticeDto noticeDto){
        noticeService.insertNotice(noticeDto);

        // insert 실패할 때, 체크값 넣어줘야할듯
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/api/updateNotice")
    public ResponseEntity<?> updateNotice(@RequestBody NoticeDto noticeDto){
        noticeService.updateNotice(noticeDto);

        // insert 실패할 때, 체크값 넣어줘야할듯
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/api/deleteNotice")
    public ResponseEntity<?> deleteNotice(@RequestParam("ntc_no") long ntc_no){
        noticeService.noticeDelete(ntc_no);

        // delete 실패할 때, 체크값 넣어줘야할듯
        return new ResponseEntity<>(HttpStatus.OK);
    }

}