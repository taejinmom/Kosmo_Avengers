package com.app.avengers.DJMT.service.file;

import org.junit.jupiter.api.Test;

import java.io.File;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.*;

class FileServiceTest {

    @Test
    public void getDrivePath() {
        File[] drives = File.listRoots();
        String driveName = "";
        double totalSize = 0;
        double freeSize = 0;
        double useSize = 0;

        String useDriveName = "";
        int count = 0;

        double[] totalSizeArr = new double[drives.length];
        for(File drive : drives) {
            driveName = drive.getAbsolutePath();
            totalSize = drive.getTotalSpace() / Math.pow(1024, 3);
            useSize = drive.getUsableSpace() / Math.pow(1024, 3);
            freeSize = totalSize - useSize;

            totalSizeArr[count] = totalSize;
        }
        Arrays.stream(totalSizeArr).max().getAsDouble();
    }
    @Test
    public void rootSpace() {
        String drive;
        double totalSize, freeSize, useSize;
        File[] roots = File.listRoots();

        for (File root : roots) {
            drive = root.getAbsolutePath();
            totalSize = root.getTotalSpace() / Math.pow(1024, 3);
            useSize = root.getUsableSpace() / Math.pow(1024, 3);
            freeSize = totalSize - useSize;

            System.out.println("드라이브 정보 : " + drive + "\n");
            System.out.println("전체 용량 : " + totalSize + " GB \n");
            System.out.println("사용 용량 : " + freeSize + " GB \n");
            System.out.println("남은 용량 : " + useSize + " GB \n");
        }
    }
    @Test
    public void hostTest() {
        InetAddress addr = null; //LocalHost 정보를 담은 InetAddress 객체 생성
        try {
            addr = InetAddress.getLocalHost();
            String strIp = addr.getHostAddress(); // IP를 strIp 변수에 담음
            String strHostNm = addr.getHostName(); // 호스트명을 strHostNm 변수에 담음
            System.out.println("운영체제 종류: " + System.getProperty("os.name") );
            System.out.println("사용자 로그인ID: " + System.getProperty("user.name") );
            // 각 ip 및 호스트명을 출력
//            System.out.println(strIp);
//            System.out.println(strHostNm);
        } catch (UnknownHostException e) {
            throw new RuntimeException(e);
        }
    }

}

