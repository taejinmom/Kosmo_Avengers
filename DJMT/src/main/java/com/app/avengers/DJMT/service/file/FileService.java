package com.app.avengers.DJMT.service.file;

import com.app.avengers.DJMT.dto.file.FileDto;
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
    @Value("${file.repository}")
    private String repository;
    /**
     * description    : 파일 저장하기 위해 volume폴더 생성
     * 2024-02-04   by  taejin
     */
    public String addVolume(String category) {
        StringBuilder builder = new StringBuilder();
//
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

    @Transactional
    public FileDto fileInsertProcess(MultipartFile multipartFile, String type, String mem_no) {
//        StringBuilder builder = new StringBuilder();
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd/HH");
        FileDto fileDto = new FileDto();
        VolumeDto volumeDto = new VolumeDto();
        String[] arr = sdf.format(timestamp).split("/");

//        String filePath = Paths.get(repository,category,arr[0],arr[1],arr[2],arr[3]).toString();
        // 파일 경로
        String filePath = fileMgr.getFilePath();
        // full 경로
        String fileFullPath = Paths.get(repository,type,filePath).toString();

        // filePath
        fileDto.setFile_path(filePath);
        fileDto.setVol_type(type);
        fileMgr.makeFileDto(multipartFile, fileDto, mem_no);
//        fileMgr.makeVolumeDto(volumeDto,repository,category);

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
        Path savePath = Paths.get(repository,type,filePath,fileDto.getFile_name());
        try {
            multipartFile.transferTo(savePath);
            fileMapper.fileSave(fileDto);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return fileDto;
    }
    public FileDto findFullPathByFileId(String file_id) {
        try {
            return fileMapper.findFullPathByFileId(file_id);
        }catch (Exception e){
            e.getStackTrace();
        }
            return null;

    }
    public byte[] getImageFile(Path path) {

        try {
            byte[] imageBytes = Files.readAllBytes(path);
            return imageBytes;
        } catch (IOException e) {
                throw new RuntimeException(e);
        }
    }
}
