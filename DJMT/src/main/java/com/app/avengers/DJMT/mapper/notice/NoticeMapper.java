package com.app.avengers.DJMT.mapper.notice;

import com.app.avengers.DJMT.dto.notice.NoticeDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface NoticeMapper {

    public NoticeDto getNoticeInfoByNtcNo(long ntc_no);

    public List<NoticeDto> getNoticeList();

    public void insertNotice(NoticeDto noticeDto);

    public void updateNotice(NoticeDto noticeDto);

    public void noticeDelete(long ntc_no);


}
