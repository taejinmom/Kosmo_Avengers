package com.app.avengers.DJMT.mapper.cart;

import com.app.avengers.DJMT.dto.cart.CartDto;
import com.app.avengers.DJMT.dto.product.ProductDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CartMapper {

    public List<CartDto> getMyCart(String mem_no);
    public void insertCart(CartDto cartDto);
    public CartDto findByMemNoAndPdctNo(CartDto cartDto);
    public void updateCart(CartDto cartDto);
    public void deleteCart(CartDto cartDto);
    public void updateCartAmt(CartDto cartDto);
}
