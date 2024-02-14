package com.app.avengers.DJMT.contoller.notice;

import com.app.avengers.DJMT.config.jwt.JwtTokenProvider;
import com.app.avengers.DJMT.dto.notice.NoticeDto;
import com.app.avengers.DJMT.service.member.MemberService;
import com.app.avengers.DJMT.service.notice.NoticeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class NoticeController {

    private final NoticeService noticeService;
    private final MemberService memberService;
    private final JwtTokenProvider jwtTokenProvider;

    @GetMapping("/api/noticeList")
    public ResponseEntity<?> noticeList(@RequestParam("ntc_cate") String ntc_cate){
        List<NoticeDto> noticeDtoList = noticeService.getNoticeList(ntc_cate);
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
        System.out.println("[insertNotice]>>>> noticeDto.getReg_id() =>"+noticeDto.getReg_id());
        String token = noticeDto.getReg_id();
        String login_id = getTokenLoginID(token);

        noticeDto.setReg_id(login_id);

        noticeService.insertNotice(noticeDto);

        // insert 실패할 때, 체크값 넣어줘야할듯
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/api/updateNotice")
    public ResponseEntity<?> updateNotice(@RequestBody NoticeDto noticeDto){
        System.out.println("[updateNotice]>>>> noticeDto.getChg_id() =>"+noticeDto.getChg_id());
        String token = noticeDto.getChg_id();
        String login_id = getTokenLoginID(token);

        noticeDto.setChg_id(login_id);

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

    @GetMapping("/api/checkNoticeAuthentication")
    public ResponseEntity<?> checkNoticeAuthentication(@RequestParam String token, String reg_id){
        boolean noticeAuth = false;
        System.out.println("[checkNoticeAuthentication] >>>>>reg_id:"+reg_id);
        String login_id = getTokenLoginID(token);
        if (reg_id.equals(login_id)){// reg_id랑 userPK의 mem_id랑 같을때,
            noticeAuth = true;
        }
        System.out.println("[checkNoticeAuthentication] >>>>>noticeAuth:"+noticeAuth);
        return new ResponseEntity<>(noticeAuth, HttpStatus.OK);
    }

    // Move to JwtTokenProvider
    public String getTokenLoginID(String token){
        System.out.println("[getTokenLoginID] >>>>>token:"+token);
        String userPK = jwtTokenProvider.getUserPk(token);
        System.out.println("[getTokenLoginID] >>>>>userPK:"+userPK);
        String login_id = memberService.getMemberInfoByMemNo(userPK).getLogin_id();
        System.out.println("[getTokenLoginID] >>>>>login_id:"+login_id);
        return login_id;
    }
}