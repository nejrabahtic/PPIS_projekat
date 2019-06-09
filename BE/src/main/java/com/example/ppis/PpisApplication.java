package com.example.ppis;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.ppis.model.Role;
import com.example.ppis.model.User;
import com.example.ppis.services.CustomUserService;

@SpringBootApplication
//@EnableAutoConfiguration(exclude={DataSourceAutoConfiguration.class,HibernateJpaAutoConfiguration.class})
@EnableJpaRepositories("com.example.ppis.repository")
@ComponentScan( "com.example.ppis.services")
public class PpisApplication {

	public static void main(String[] args) {
		SpringApplication.run(PpisApplication.class, args);
	}
	@Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
	@Bean
	public CustomUserService customservice() {
		return new CustomUserService();
	}
	
	@Bean
    public CommandLineRunner demoData(CustomUserService service) {
        return args -> { 
        	BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        	service.save(new User("neda",passwordEncoder.encode("admin"),"ndjonlagic1@gmail.com","Nedim","Djonla","123456789","neka adresa",Arrays.asList(new Role("ROLE_ADMIN"))));
        	service.save(new User("dela",passwordEncoder.encode("developer"),"dela@gmail.com","Muhamed","Delalic","123456789","neka adresa",Arrays.asList(new Role("ROLE_DEVELOPER"))));
        	service.save(new User("nejra",passwordEncoder.encode("user"),"nbahtic@gmail.com","Nejra","Bahtic","123456789","neka adresa",Arrays.asList(new Role("ROLE_USER"))));
        	//            service.save(new User("Ned","Ned2","ndjonlagic1@gmail.com",passwordEncoder.encode("admin"),Arrays.asList(new Role("ROLE_ADMIN"))));
        };
    }

}
