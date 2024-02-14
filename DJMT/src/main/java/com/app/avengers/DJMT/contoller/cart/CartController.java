package com.app.avengers.DJMT.contoller.cart;

import com.app.avengers.DJMT.dto.cart.CartDto;
import com.app.avengers.DJMT.dto.notice.NoticeDto;
import com.app.avengers.DJMT.service.cart.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@Slf4j
@RestController
@RequiredArgsConstructor
public class CartController {
    private final CartService service;

    @PostMapping("/api/myCart/{mem_no}")
    public ResponseEntity<?> getMyCart(@PathVariable String mem_no){
        return ResponseEntity.ok(service.getMyCart(mem_no));
    }

    @PostMapping("/api/cart/insert")
    public ResponseEntity<?> insertCart(@RequestBody CartDto cartDto){
        return ResponseEntity.ok(service.insertCart(cartDto));
    }

    @PutMapping("/api/myCart/updateAmt")
    public ResponseEntity<?> updateAmt(@RequestBody CartDto cartDto){
        return ResponseEntity.ok(service.updateCartAmt(cartDto));
    }

    @PostMapping("api/myCart/delete")
    public ResponseEntity<?> deleteCart(@RequestBody CartDto cartDto){
        return ResponseEntity.ok(service.deleteCart(cartDto));
    }



}
