package com.app.avengers.DJMT.dto.product;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
public class ProductDto {
    private String pdctNo;
    private String pdctCateNo;
    private String pdctNm;
    private String pdctPrice;
    private String pdctComm;
    private String pdctAmt;
    private String pdctStatus;
    private String regId;
    private String regDate;
    private String chgDate;
    private String chgId;

    public void toDto(Map<String ,String> map){
        map.forEach((key, value)->{
            
        });
    }

}
