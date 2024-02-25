package com.app.avengers.DJMT.service.file;

import com.app.avengers.DJMT.dto.file.FileDto;
import com.app.avengers.DJMT.dto.file.VolumeContainer;
import com.app.avengers.DJMT.dto.file.VolumeDto;
import com.app.avengers.DJMT.mapper.file.FileMapper;
import com.app.avengers.DJMT.mgr.file.FileMgr;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * packageName    : com.app.avengers.DJMT.service.file
 * fileName       : FileService
 * author         : Administrator
 * date           : 2024-02-04
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-02-04        Administrator       최초 생성
 */
@Slf4j
@RequiredArgsConstructor
@Service
public class FileService {
    private final FileMapper fileMapper;
    private final FileMgr fileMgr;
    @Value("${file.repository}") // 레파지토리 경로
    private String repository;
    /**
     * description    : 파일 저장하기 위해 volume폴더 생성
     * 2024-02-04   by  taejin
     */
    public String addVolume(String category, String repository) {
        StringBuilder builder = new StringBuilder();
//
        VolumeDto volumeDto = new VolumeDto();
        fileMgr.makeVolumeDto(volumeDto, repository, category);
        String volumePath = Paths.get(repository,category).toString();
        File folder = new File(volumePath);
        if (!folder.exists()) {
            try {
                folder.mkdirs(); //폴더 생성합니다.
                log.info("폴더가 생성되었습니다. >>> " + builder.toString());
            } catch (Exception e) {
                e.getStackTrace();
            }
        } else {
            log.info("이미 폴더가 생성되어 있습니다." + builder.toString());
        }
        return volumePath;
    }
    
    /**
    * description    : 로컬에 이미지파일 다운로드 프로세스
    *    by  taejin
    */
    @Transactional
    public FileDto fileInsertProcess(MultipartFile multipartFile, String type, String mem_no) {
        FileDto fileDto = new FileDto();

        // 파일 경로
        String filePath = fileMgr.getFilePath();
        // full 경로
        String fileFullPath = Paths.get(fileMgr.getRepositoryByOS(),type,filePath).toString();

        // fileDto 세팅
        fileDto.setFile_path(filePath);
        fileDto.setVol_type(type);
        fileMgr.makeFileDto(multipartFile, fileDto, mem_no);

        // 폴더 생성
        File folder = new File(fileFullPath);
        if (!folder.exists()) {
            try {
                folder.mkdirs(); //폴더 생성합니다.
                log.info("폴더가 생성되었습니다. >>> " + filePath);
            } catch (Exception e) {
                e.getStackTrace();
            }
        } else {
            log.info("이미 폴더가 생성되어 있습니다." + filePath);
        }
        // 파일 생성
        Path savePath = Paths.get(fileFullPath, fileDto.getFile_name());
        try {
            fileMapper.editFileInfo(mem_no); // 사용자 정보 업데이트 이전 파일 delYn -> Y
            fileMapper.fileSave(fileDto); // 새로 추가 된 파일 insert
            multipartFile.transferTo(savePath); // 템프경로에서 파일 복사 -> repository
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return fileDto;
    }
    /**
    * description    : fileid로 해당 파일 경로 fullpath찾기
    *    by  taejin
    */
    public FileDto findFullPathByFileId(String file_id) {
        try {
            return fileMapper.findFullPathByFileId(file_id);
        }catch (Exception e){
            e.getStackTrace();
        }
            return null;
    }
    
    /**
    * description    : 이미지 파일 byte array로 읽어오기
    *    by  taejin
    */
    public byte[] getImageFile(Path path) {

        try {
            byte[] imageBytes = Files.readAllBytes(path);
            return imageBytes;
        } catch (IOException e) {
                throw new RuntimeException(e);
        }
    }
    /**
     * description    : 현재 db에 volume check해서 없는 volume추가
     * 2024-02-25   by  taejin       
     */
    public boolean checkVolumeInit() {
        VolumeContainer container = new VolumeContainer();

        Arrays.stream(container.getClass().getFields())
                .forEach(f -> {
                    String volume_type = "";
                    // 해당 볼륨 db에 있는지 체크
                    if(fileMapper.checkVolumeRepositoryInit(f.toString().substring(f.toString().lastIndexOf(".") + 1)) != null){
                        log.info("DB에 이미 있음 >> " + f.toString().substring(f.toString().lastIndexOf(".") + 1));
                        volume_type = "";
                    }else{
                        VolumeDto volumeDto = new VolumeDto();
                        // volume 체크
                        volume_type = f.toString().substring(f.toString().lastIndexOf(".") + 1);
                        //
                        volumeDto = fileMgr.makeVolumeDto(volumeDto, fileMgr.getRepositoryByOS(), volume_type);
                        // insert
                        fileMapper.addVolume(volumeDto);
                        log.info("DB에 없음 볼륨 추가 >> " + volume_type);
                    }
                });
        return false;
    }



}
