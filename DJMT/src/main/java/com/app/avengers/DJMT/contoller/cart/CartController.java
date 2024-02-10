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

    @PostMapping("/api/cart/insert")
    public ResponseEntity<?> insertCart(@RequestBody CartDto cartDto){
        log.debug("CONTROLLER insertCart");
        return ResponseEntity.ok(service.insertCart(cartDto));
    }

    @PostMapping("/api/myCart/{mem_no}")
    public ResponseEntity<?> getMyCart(@PathVariable String mem_no){
        log.debug("CONTROLLER getMyCart");
        return ResponseEntity.ok(service.getMyCart(mem_no));
    }



}
