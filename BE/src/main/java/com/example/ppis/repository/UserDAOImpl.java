package com.example.ppis.repository;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.ppis.model.Role;
import com.example.ppis.model.User;

@Repository
public class UserDAOImpl {

	public User getUserByUsername(final String username) {
        //Dobavit info iz baze, ali trenutno je hardkodiran user, moze se napravit interface koji extenda JpaRepo kad se nakaci na bazu
           User user = new User();
           user.setFirstName("Nedim");
           user.setLastName("Djonlagic");
           user.setUsername("test");
           user.setPassword("test");
           Role r = new Role();
           r.setName("ROLE_USER");
           List<Role> roles = new ArrayList<Role>();
           roles.add(r);
           user.setAuthorities(roles);
           return user;
       }
}
