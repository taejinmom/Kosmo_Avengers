package com.app.avengers.DJMT.contoller.product;

import com.app.avengers.DJMT.service.product.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@Slf4j
@RestController
@RequiredArgsConstructor
public class ProductController {
    private final ProductService service;

    @GetMapping("/api/product")
    public ResponseEntity<?> getProduct(){
        return ResponseEntity.ok(service.getProduct());
    }



}
