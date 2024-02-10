package com.app.avengers.DJMT.dto.cart;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
public class CartDto {
    private int cart_no;
    private int cart_amt;
    private String pdct_no;
    private String mem_no;
    private String reg_date;
    private String chg_date;

    private String pdct_cate_no;
    private String pdct_nm;
    private String pdct_price;
    private String pdct_comm;
    private String pdct_amt;
    private String pdct_status;

    public void toDto(Map<String ,String> map){
        map.forEach((key, value)->{

        });
    }

}
