package com.app.avengers.DJMT.service.product;

import com.app.avengers.DJMT.dto.product.ProductDto;
import com.app.avengers.DJMT.mapper.product.ProductMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@AllArgsConstructor
@Service
public class ProductService  {

    private final ProductMapper mapper;

    public List<ProductDto> getProduct() {
        List<ProductDto> list = mapper.getProduct();
        return list;
    }
    public ProductDto getProductDetail(String pdct_no) {
        ProductDto dto = mapper.getProductDetail(pdct_no);
        System.out.println("pdct_no :: "+pdct_no);
        return dto;
    }


}
