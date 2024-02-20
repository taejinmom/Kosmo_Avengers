package com.app.avengers.DJMT.service.order;

import com.app.avengers.DJMT.dto.cart.CartDto;
import com.app.avengers.DJMT.dto.order.OrderDto;
import com.app.avengers.DJMT.mapper.cart.CartMapper;
import com.app.avengers.DJMT.mapper.order.OrderMapper;
import com.app.avengers.DJMT.mapper.product.ProductMapper;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@AllArgsConstructor
@Service
public class OrderService {

    private final OrderMapper orderMapper;
    private final ProductMapper productMapper;

    public List<OrderDto> getPdctInfo(OrderDto orderDto) {
        int result = 0;
        ArrayList<Integer> list = orderDto.getChkList();
        System.out.println("list :: "+list);
        List<OrderDto> ords = new ArrayList<>();
        if(orderDto.getChkList() != null && !orderDto.getChkList().isEmpty()) {
            for (int i = 0; i < list.size(); i++) {
                OrderDto ord = orderMapper.getPdctInfo(orderDto);
                ords.add(ord);

            }
        }
        return ords;
    }

//    public int insertCart(CartDto cartDto) {
//        CartDto cart = cartMapper.findByMemNoAndPdctNo(cartDto);
//        int result = 0;
//        if(cart == null){
//            cartMapper.insertCart(cartDto);
//            result = 1;
//        }else{
//            int prevAmt = cart.getCart_amt();
//            cart.setCart_amt(prevAmt+cartDto.getCart_amt());
//            cartMapper.updateCart(cart);
//            result = 1;
//        }
//        return result;
//    }
//
//    public int updateCartAmt(CartDto cartDto) {
//        CartDto cart = cartMapper.findByMemNoAndPdctNo(cartDto);
//        int result = 0;
//        if (cart != null && cartDto.getCart_amt() > 0){
//            cartMapper.updateCart(cartDto);
//            result = 1;
//        } else if (cartDto.getPdct_amt() <= 0){
//            cartDto.setCart_amt(0);
//            cartMapper.updateCart(cartDto);
//            result = 1;
//        }
//        return result;
//    }
//
//    public int deleteCart(CartDto cartDto){
//        int result = 0;
//        ArrayList<String> list = cartDto.getChkList();
//        System.out.println("list :: "+list);
//        if(cartDto.getChkList() != null && !cartDto.getChkList().isEmpty()){
//            for (int i = 0; i < list.size(); i++) {
//                String pdct_no = list.get(i);
//                cartDto.setPdct_no(pdct_no);
//                CartDto cartYn = cartMapper.findByMemNoAndPdctNo(cartDto);
//                if (cartYn != null) {
//                    CartDto cart = new CartDto();
//                    System.out.println("pdct_no :: "+pdct_no);
//                    cart.setPdct_no(list.get(i));
//                    cartMapper.deleteCart(cartDto);
//                    result = 1;
//                }
//            }
//        }else {
//            CartDto cartYn = cartMapper.findByMemNoAndPdctNo(cartDto);
//            if (cartYn != null) {
//                cartMapper.deleteCart(cartDto);
//                result = 1;
//            }
//        }
//        return result;
//    }


}
