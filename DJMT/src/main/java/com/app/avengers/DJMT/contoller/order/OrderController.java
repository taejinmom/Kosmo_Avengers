package com.app.avengers.DJMT.contoller.order;

import com.app.avengers.DJMT.dto.cart.CartDto;
import com.app.avengers.DJMT.dto.order.OrderDto;
import com.app.avengers.DJMT.service.cart.CartService;
import com.app.avengers.DJMT.service.order.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@Slf4j
@RestController
@RequiredArgsConstructor
public class OrderController {
    private final OrderService service;

    @PostMapping("/api/pdctInfo")
    public ResponseEntity<?> getPdctInfo(@RequestBody OrderDto orderDto){
        System.out.println("getChkList :: "+orderDto.getChkList());
        return ResponseEntity.ok(service.getPdctInfo(orderDto));
    }

//    @PostMapping("/api/cart/insert")
//    public ResponseEntity<?> insertCart(@RequestBody CartDto cartDto){
//        return ResponseEntity.ok(service.insertCart(cartDto));
//    }
//
//    @PutMapping("/api/myCart/updateAmt")
//    public ResponseEntity<?> updateAmt(@RequestBody CartDto cartDto){
//        return ResponseEntity.ok(service.updateCartAmt(cartDto));
//    }
//
//    @PostMapping("api/myCart/delete")
//    public ResponseEntity<?> deleteCart(@RequestBody CartDto cartDto){
//        return ResponseEntity.ok(service.deleteCart(cartDto));
//    }



}
