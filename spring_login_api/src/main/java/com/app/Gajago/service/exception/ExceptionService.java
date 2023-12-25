package com.app.Gajago.service.exception;

import com.app.Gajago.common.exception.ErrorCode;
import com.app.Gajago.common.exception.MyException;
import org.springframework.stereotype.Service;

@Service
public class ExceptionService {
    
    // 로그인 관련
    // ID가 없습니다
    public void loginFailedById() {
        throw new MyException(ErrorCode.INVALID_PASSWORD);
    }
    // 패스워드가 틀렸습니다
    public void loginFailedByPassword() {
        throw new MyException(ErrorCode.INVALID_PASSWORD);
    }
}
