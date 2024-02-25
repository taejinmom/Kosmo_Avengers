package com.app.avengers.DJMT.contoller.order;

import com.app.avengers.DJMT.dto.cart.CartDto;
import com.app.avengers.DJMT.dto.order.OrderDto;
import com.app.avengers.DJMT.service.cart.CartService;
import com.app.avengers.DJMT.service.order.OrderService;
import com.siot.IamportRestClient.IamportClient;
import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.response.IamportResponse;
import com.siot.IamportRestClient.response.Payment;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;


@Slf4j
@RestController
@RequiredArgsConstructor
public class OrderController {
    private final OrderService service;

    @Value("${iamport.key}")
    private String restApiKey;
    @Value("${iamport.secret}")
    private String restApiSecret;

    private IamportClient iamportClient;

    @PostConstruct
    public void init() {
        this.iamportClient = new IamportClient(restApiKey, restApiSecret);
    }
    @PostMapping("/api/pdctInfo")
    public ResponseEntity<?> getPdctInfo(@RequestBody OrderDto orderDto){
        System.out.println("getChkList :: "+orderDto.getChkList());
        return ResponseEntity.ok(service.getPdctInfo(orderDto));
    }

    @PostMapping("/api/verifyIamport/{imp_uid}")
    public IamportResponse<Payment> paymentByImpUid(@PathVariable("imp_uid") String imp_uid) throws IamportResponseException, IOException {
        return iamportClient.paymentByImpUid(imp_uid);
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
