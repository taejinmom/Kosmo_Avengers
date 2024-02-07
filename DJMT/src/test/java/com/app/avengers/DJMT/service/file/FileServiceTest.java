package com.app.avengers.DJMT.service.file;

import org.junit.jupiter.api.Test;

import java.io.File;

import static org.junit.jupiter.api.Assertions.*;

class FileServiceTest {

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

}