package com.app.avengers.DJMT.mapper.file;

import com.app.avengers.DJMT.dto.file.FileDto;
import com.app.avengers.DJMT.dto.file.VolumeDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface FileMapper {
    

    public void fileSave(FileDto fileDto); // 회원가입
    public FileDto findFullPathByFileId(String file_id);// 파일 full path 찾기
    public int editFileInfo(String mem_no); // 파일 업데이트 - 이전파일 del_yn -> Y
    public List<String> deleteUnUsedActualFile(); // 물리 파일 삭제를 위해 경로 추출
    public int deleteUnUsedFile(); // 삭제할 파일들 delete
    public String checkVolumeRepositoryInit(String volume_type); // init - volume 체크
    public void addVolume(VolumeDto volumeDto) ; // volume insert
}
