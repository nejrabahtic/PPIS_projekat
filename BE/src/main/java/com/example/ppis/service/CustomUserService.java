package com.example.ppis.service;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.example.ppis.model.Role;
import com.example.ppis.model.User;
import com.example.ppis.repository.UserDAOImpl;

public class CustomUserService implements UserDetailsService {

	@Autowired
    private UserDAOImpl userDao;
    
    
   public User loadUserByUsername(String username) throws UsernameNotFoundException {
       return userDao.getUserByUsername(username);
   }
//   @Override
//   public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//       User user = userDao.getUserByUsername(username);
//       if (user == null){
//           throw new UsernameNotFoundException("Invalid username or password.");
//       }
//       return new org.springframework.security.core.userdetails.User(user.getEmail(),
//               user.getPassword(),
//               mapRolesToAuthorities(user.getAuthorities()));
//   }
//
//   private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles){
//       return roles.stream()
//               .map(role -> new SimpleGrantedAuthority(role.getName()))
//               .collect(Collectors.toList());
//   }

}
