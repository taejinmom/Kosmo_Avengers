package com.app.avengers.DJMT.mapper.file;

import com.app.avengers.DJMT.dto.file.FileDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FileMapper {
    

    public void fileSave(FileDto fileDto); // 회원가입
    public FileDto findFullPathByFileId(String file_id);// 파일 full path 찾기
}
