package com.app.avengers.DJMT.service.notice;

import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.dto.notice.NoticeDto;
import com.app.avengers.DJMT.mapper.notice.NoticeMapper;
import com.app.avengers.DJMT.repository.notice.NoticeRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Slf4j
@AllArgsConstructor
@Service
public class NoticeService implements NoticeRepository {


    private  final NoticeMapper noticeMapper;

    @Override
    public NoticeDto getNoticeInfoByNtcNo(long ntc_no) {
        System.out.println(">>>> ntc_no =>"+ntc_no);
        return noticeMapper.getNoticeInfoByNtcNo(ntc_no);
    }

    @Override
    public List<NoticeDto> getNoticeList() {
        return noticeMapper.getNoticeList();
    }

    @Override
    public void insertNotice(NoticeDto noticeDto) {
//        noticeDto.setReg_id("로그인한 id");
        noticeDto.setReg_date(new SimpleDateFormat("yyyy-MM-dd HH:mm").format(new Date()));
        noticeMapper.insertNotice(noticeDto);
    }

    @Override
    public void updateNotice(NoticeDto noticeDto) {
//        noticeDto.setChg_id("로그인한 id");
        noticeDto.setChg_date(new SimpleDateFormat("yyyy-MM-dd HH:mm").format(new Date()));
        noticeMapper.updateNotice(noticeDto);
    }

    @Override
    public void noticeDelete(long ntc_no) {
        noticeMapper.noticeDelete(ntc_no);
    }
}
