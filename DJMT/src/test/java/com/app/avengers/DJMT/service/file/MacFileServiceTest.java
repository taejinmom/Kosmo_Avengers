package com.app.avengers.DJMT.service.file;

import org.junit.jupiter.api.Test;

import java.io.File;
import java.util.Arrays;

class MacFileServiceTest {

    @Test
    public void osCheck() {
        File[] roots = File.listRoots(); //<-- 이부분 디버깅 걸어서 안에 값도 좀 보여줘!
        System.out.println("roots: " + Arrays.stream(roots).toList() );
        System.out.println("운영체제 종류: " + System.getProperty("os.name") );
        System.out.println("사용자 로그인ID: " + System.getProperty("user.name") );
    }

}