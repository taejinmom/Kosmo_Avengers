package com.app.avengers.DJMT.repository.notice;

import com.app.avengers.DJMT.dto.notice.NoticeDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoticeRepository {

    public NoticeDto getNoticeInfoByNtcNo(long ntc_no); // 게시글 번호로 게시글 호출

    public List<NoticeDto> getNoticeList(); // 게시글 리스트 뽑기

    public void insertNotice(NoticeDto noticeDto); // 게시글 작성

    public void updateNotice(NoticeDto noticeDto); // 게시글 수정

    public void noticeDelete(long ntc_no); // 게시글 삭제

}