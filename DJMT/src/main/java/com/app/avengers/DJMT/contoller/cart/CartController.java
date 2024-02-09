package com.app.avengers.DJMT.contoller.cart;

import com.app.avengers.DJMT.dto.cart.CartDto;
import com.app.avengers.DJMT.dto.notice.NoticeDto;
import com.app.avengers.DJMT.service.cart.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


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



}
