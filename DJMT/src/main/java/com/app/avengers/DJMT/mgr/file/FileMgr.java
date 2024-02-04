package com.app.avengers.DJMT.mgr.file;

import com.app.avengers.DJMT.constants.Constants;
import com.app.avengers.DJMT.dto.file.FileDto;
import com.app.avengers.DJMT.dto.file.VolumeDto;
import com.app.avengers.DJMT.service.common.CommonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

/**
 * packageName    : com.app.avengers.DJMT.mgr.file
 * fileName       : FileMgr
 * author         : Administrator
 * date           : 2024-02-04
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-02-04        Administrator       최초 생성
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class FileMgr {

    private final CommonService commonService;

    public FileDto makeFileDto(MultipartFile multipartFile, FileDto fileDto) {
        String file_id = commonService.generateUUID(Constants.FILE);
        String file_name = commonService.generateUUID(Constants.FILE);
        fileDto.setFile_id(file_id);
        fileDto.setFile_name(file_name);
        fileDto.setFile_orgName(multipartFile.getOriginalFilename());
//        fileDto.set
        return fileDto;
    }
    public VolumeDto makeVolumeDto() {

    }

}
