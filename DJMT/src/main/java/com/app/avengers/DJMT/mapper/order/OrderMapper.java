package com.app.avengers.DJMT.mapper.order;

import com.app.avengers.DJMT.dto.cart.CartDto;
import com.app.avengers.DJMT.dto.order.OrderDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {

    public OrderDto getPdctInfo(OrderDto orderDto);
    public void insertCart(CartDto cartDto);
    public CartDto findByMemNoAndPdctNo(CartDto cartDto);
    public void updateCart(CartDto cartDto);
    public void deleteCart(CartDto cartDto);
    public void updateCartAmt(CartDto cartDto);
}
