package com.app.avengers.DJMT.service.member;

import com.app.avengers.DJMT.constants.Constants;
import com.app.avengers.DJMT.dto.file.FileDto;
import com.app.avengers.DJMT.dto.login.LoginHistoryDto;
import com.app.avengers.DJMT.dto.member.MemberDto;
import com.app.avengers.DJMT.mapper.member.MemberMapper;
import com.app.avengers.DJMT.mgr.member.MemberMgr;
import com.app.avengers.DJMT.repository.member.MemberRepository;
import com.app.avengers.DJMT.service.common.CommonService;
import com.app.avengers.DJMT.service.file.FileService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.ibatis.type.TypeReference;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.lang.reflect.Member;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Slf4j
@RequiredArgsConstructor
@Service
public class MemberService implements MemberRepository {

    private final MemberMapper memberMapper;
    private final MemberMgr memberMgr;
    private final CommonService commonService;
    private final FileService fileService;


    /**
     * description    : 토큰 유효성 체크
     * 2024-01-07   by  taejin       
     */
    @Override
    public MemberDto ValidateTokenByMemNo(String mem_no) {
        return memberMapper.ValidateTokenByMemNo(mem_no);
    }

    /**
     * description    : 로그인 -> 패스워드 validation
     * 2023-12-22   by  taejin
     */
    @Override
    public MemberDto loginCheck(MemberDto memberDto) {
        // 패스워드 체크
        if(memberMgr.loginvalidation(
                memberDto.getLogin_pw(), loginCheckPw(memberDto.getLogin_id()).orElse(""))
            ){
            // 패스워드 체크 성공 시 member데이터 추출
            memberDto = memberMapper.getMemberInfoByLoginId(memberDto.getLogin_id());
            memberDto.setValid(Constants.COMMON_CONSTANTS_Y); // default = N
            return memberDto;
        }
        return null;
    }

    /**
     * description    : 입력된 패스워드와 비교할 패스워드를 login_id 로 조회하여 호출
     * 2023-12-22   by  taejin
     */
    @Override
    public Optional<String> loginCheckPw(String login_id) {
        return memberMapper.loginCheckPw(login_id);
    }

    /**
     * description    : 회원가입
     * 2023-12-22   by  taejin
     */
    @Transactional
    @Override
    public void memberSave(MemberDto memberDto , LoginHistoryDto loginHistoryDto) {
        // memberDto 만들기 - uuid, 패스워드 인코딩, 가입날짜.. 등등  추가할 예정
        // loginHistoryDto 만들기
        memberMapper.memberSave(memberMgr.makeMemberDto(memberDto, loginHistoryDto));
        memberMapper.addLoginHistory(loginHistoryDto);
    }

    /**
     * description    : myPage 데이터 출력
     * 2024-01-13   by  taejin       
     */
    public HashMap<String,Object> getMemberInfoByMemNo(String mem_no){
        HashMap<String,Object> map = new HashMap<>();
        // 회원
        MemberDto memberDto = memberMapper.getMemberInfoByMemNo(mem_no);
        map.put("memberDto",memberDto);
        //
        try{
            FileDto fileDto = fileService.findFullPathByFileId(memberDto.getMem_profile());
            byte[] imageBytes = fileService.getImageFile(Paths.get(fileDto.getFile_full_path()));

            map.put("imageBytes",imageBytes);
        }catch (Exception e) {
            e.getStackTrace();
        }
        return map;
    }

    /**
    * description    : 사용자 정보 변경
    *    by  taejin
    */
    @Transactional
    public FileDto editMemberInfo(String category, MultipartFile multipartFile, Map<String,Object> map){
        // 파일 저장
        FileDto fileDto = fileService.fileInsertProcess(multipartFile,category, (String)map.get("mem_no"));

        ObjectMapper mapper = new ObjectMapper();
        MemberDto memberDto = mapper.convertValue(commonService.checkAndTransform(map),MemberDto.class);
        memberDto.setMem_profile(fileDto.getFile_id());
        // 사용자 정보 변경
        memberMapper.editMemberInfo(memberDto);

        return null;
    }
    /**
     * description    : 관리자 페이지 - 사용자 리스트 출력
     * 2024-01-25   by  taejin
     */
    public List<MemberDto> selectMemberList() {
        return memberMapper.selectMemberList();
    }

    /**
     * description    :  관리자 페이지 - 사용자 삭제(* 단건 *)
     * 2024-01-25   by  taejin       
     */
    public int adminDeleteMember(String mem_no) {
        return memberMapper.adminDeleteMember(mem_no);
    }
    /**
     * description    : update login history - status로 구분(login , logout)
     * 2024-01-27   by  taejin       
     */
    public int recordLoginHistory(LoginHistoryDto loginHistoryDto, String mem_no, String status){
        loginHistoryDto.setMem_no(mem_no);
        loginHistoryDto.setReg_id(mem_no);
        loginHistoryDto.setCurrent_date(commonService.currentDate());
        loginHistoryDto.setStatus(status);
        return memberMapper.updateLoginHistory(loginHistoryDto);
    }

    /**
     * description    : 사용자 더미 데이터 삭제(초기 개발시에만 사용)
     * 2023-12-22   by  taejin
     */
    @Override
    public void start() {
        memberMapper.start();
        log.info("delete 시작 ");
    }
}
