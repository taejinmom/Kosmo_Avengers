package com.app.avengers.DJMT.mapper.product;

import com.app.avengers.DJMT.dto.product.ProductDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {

    public List<ProductDto> getProduct();
    public ProductDto getProductDetail(String pdct_no);
}
