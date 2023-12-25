package com.app.Gajago;

import com.app.Gajago.mapper.user.UserMapper;
import com.app.Gajago.repository.UserRepository;
import com.app.Gajago.service.user.UserService;
import jakarta.annotation.PostConstruct;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan(value="com.app.Gajago.mapper")
public class GajagoApplication {

	@Autowired
	UserMapper userMapper;
	@Autowired
	UserRepository userRepository;
	@Autowired
	UserService userService;
	public static void main(String[] args) {
		SpringApplication.run(GajagoApplication.class, args);
	}

	@PostConstruct
	public void test() {
		System.out.println("GajagoApplication.test");
		System.out.println("userMapper = " + userMapper);
		System.out.println("userRepository = " + userRepository);
		System.out.println("userService = " + userService);

	}
}
