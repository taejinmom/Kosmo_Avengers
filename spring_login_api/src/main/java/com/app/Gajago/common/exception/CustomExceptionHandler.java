package com.app.Gajago.common.exception;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CustomExceptionHandler {
    @ExceptionHandler(MyException.class)
    protected ResponseEntity<ErrorResponseEntity> handleCustomException(MyException e) {
        return ErrorResponseEntity.toResponseEntity(e.getErrorCode());
    }
}