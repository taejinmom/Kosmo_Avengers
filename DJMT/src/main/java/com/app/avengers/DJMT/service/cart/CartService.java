package com.app.avengers.DJMT.service.cart;

import com.app.avengers.DJMT.dto.cart.CartDto;
import com.app.avengers.DJMT.dto.product.ProductDto;
import com.app.avengers.DJMT.mapper.cart.CartMapper;
import com.app.avengers.DJMT.mapper.product.ProductMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@AllArgsConstructor
@Service
public class CartService {

    private final CartMapper cartMapper;
    private final ProductMapper productMapper;

    public List<CartDto> getMyCart(String mem_no) {
        List<CartDto> list = cartMapper.getMyCart(mem_no);
        return list;
    }

    public int insertCart(CartDto cartDto) {
        CartDto cart = cartMapper.findByMemNoAndPdctNo(cartDto);
        int result = 0;
        if(cart == null){
            cartMapper.insertCart(cartDto);
            result = 1;
        }else{
            int prevAmt = cart.getCart_amt();
            cart.setCart_amt(prevAmt+cartDto.getCart_amt());
            cartMapper.updateCart(cart);
            result = 1;
        }
        return result;
    }


}
