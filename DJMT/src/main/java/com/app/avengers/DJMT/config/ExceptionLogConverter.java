package com.app.avengers.DJMT.config;

import ch.qos.logback.classic.pattern.ThrowableProxyConverter;
import ch.qos.logback.classic.spi.IThrowableProxy;
import org.springframework.util.StringUtils;

import java.util.stream.Stream;

/**
 * packageName    : com.app.avengers.DJMT.config
 * fileName       : ExceptionLogConverter
 * author         : Administrator
 * date           : 2024-01-07
 * description    :
 * ===========================================================
 * DATE              AUTHOR             NOTE
 * -----------------------------------------------------------
 * 2024-01-07        Administrator       최초 생성
 */
public class ExceptionLogConverter extends ThrowableProxyConverter {
    @Override
    protected String throwableProxyToString(IThrowableProxy tp) {
        return this.extractException(tp);
    }

    private String extractException(IThrowableProxy tp) {
        StringBuffer sb = new StringBuffer();
        sb.append(tp.getClassName());
        sb.append(" : ");
        sb.append(tp.getMessage());
        Stream.of(tp.getStackTraceElementProxyArray())
                .forEach(v -> {
                    if (v.getSTEAsString().indexOf("com.app.avengers.DJMT") > 0) {
                        sb.append("\n");
                        sb.append(v.getSTEAsString());
                    }
                });
        return sb.toString();
    }
}
