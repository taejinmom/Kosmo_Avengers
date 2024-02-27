package com.app.avengers.DJMT.mgr.file;

import com.app.avengers.DJMT.constants.Constants;
import com.app.avengers.DJMT.dto.file.FileDto;
import com.app.avengers.DJMT.dto.file.VolumeDto;
import com.app.avengers.DJMT.service.common.CommonService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.nio.file.Paths;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

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

    /**
    * description    : fileDto 생성
    *    by  taejin
    */
    public FileDto makeFileDto(MultipartFile multipartFile, FileDto fileDto, String mem_no) {
        String file_id = commonService.generateUUID(Constants.FILE);
        String file_name = commonService.generateUUID(Constants.FILE);
        fileDto.setFile_id(file_id);
        fileDto.setFile_name(file_name);
        fileDto.setFile_orgname(multipartFile.getOriginalFilename());
        fileDto.setFile_path(getFilePath());
        fileDto.setFile_type(multipartFile.getContentType());
        if(mem_no.isEmpty()) mem_no = "";

        fileDto.setReg_id(mem_no);
        fileDto.setReg_date(commonService.currentDate());
        fileDto.setChg_id(mem_no);
        fileDto.setChg_date(commonService.currentDate());
//        fileDto.set
        return fileDto;
    }
    /**
    * description    : file 떨굴 위치 날짜(시간)으로 경로 지정하기
    *    by  taejin
    */
    public String getFilePath () {
        Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd/HH");
        String[] arr = sdf.format(timestamp).split("/");
        return Paths.get("",arr[0],arr[1],arr[2],arr[3]).toString();
    }
    /**
    * description    : volumeDto 생성
    *    by  taejin
    */
    public VolumeDto makeVolumeDto(VolumeDto volumeDto,String repository, String type){
        volumeDto.setVol_path(repository);
        volumeDto.setVol_type(type);
        volumeDto.setVol_id(commonService.generateUUID(Constants.VOLUME));
        return volumeDto;
    }

    /**
     * description    : OS 별로 Repository 나누기
     * 2024-02-25   by  taejin       
     */
    public String makeRepositoryPath(HashMap<String, String> map) {
        String os   = map.get("os.name").split(" ")[0];
        String user = map.get("user.name");
        if(os.equals(Constants.OS_MAC)){
            return Paths.get(os,user,Constants.REPOSITORY).toString();
        }else {
            return Paths.get("D:",Constants.REPOSITORY).toString();
        }
    }

    /**
     * description    : OS 별로 Repository 나누기... 서버의 os가 달라서..
     * 2024-02-25   by  taejin       
     */
    public String getRepository() {
        HashMap<String, String> result = new HashMap<>();

        result.put("os.name", System.getProperty("os.name"));
        result.put("user.name", System.getProperty("user.name"));
        

        return makeRepositoryPath(result);
    }

    /**
     * description    : TODO: 존재 드라이브 용량 확인
     * 2024-02-25   by  taejin
     */
    public Map<String,String> getSpaceInfo() {
        Map<String,String> result = new HashMap<String,String>();
        String driveName = "";
        double totalSize = 0;
        double freeSize = 0;
        double useSize = 0;

        File[] drives = File.listRoots();
        for(File drive : drives) {
            driveName = drive.getAbsolutePath();
            totalSize = drive.getTotalSpace() / Math.pow(1024, 3);
            useSize = drive.getUsableSpace() / Math.pow(1024, 3);
            freeSize = totalSize - useSize;

            result.put("driveName", driveName);
            result.put("totalSize", String.valueOf(totalSize));
            result.put("useSize", String.valueOf(useSize));
            result.put("freeSize", String.valueOf(freeSize));
            System.out.println("하드 디스크 이름 : " + driveName + "\n");
            System.out.println("전체 디스크 용량 : " + totalSize + " GB \n");
            System.out.println("디스크 사용 용량 : " + freeSize + " GB \n");
            System.out.println("디스크 남은 용량 : " + useSize + " GB \n");
        }
        return result;
    }
}
