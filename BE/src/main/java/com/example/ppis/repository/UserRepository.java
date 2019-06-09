package com.example.ppis.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


//package com.example.ppis.repository;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.springframework.stereotype.Repository;
//
import com.example.ppis.model.Role;
import com.example.ppis.model.User;
//
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmail(String email);
	void deleteByEmail(String email);
	User findById(long id);
}
