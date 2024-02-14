package com.app.avengers.DJMT.dto.order;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
public class OrderDto {
    private int ord_no;
    private String mem_no;
    private int pdct_no;
    private int ord_cnt;
    private String ord_stat;
    private String ord_addr;
    private String ord_nm;
    private String ord_date;
    private String ord_edate;

    private String pdct_cate_no;
    private String pdct_nm;
    private String pdct_price;
    private String pdct_comm;
    private String pdct_amt;
    private String pdct_status;

    private String reg_date;
    private String chg_date;

    private ArrayList<Integer> chkList;  // 선택상품 구매하기


    public void toDto(Map<String ,String> map){
        map.forEach((key, value)->{

        });
    }

}
