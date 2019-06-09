package com.example.ppis.services;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.ppis.model.Role;
import com.example.ppis.model.User;
import com.example.ppis.repository.UserRepository;
//import com.example.ppis.repository.UserDAOImpl;
//
public class CustomUserService implements UserDetailsService {


@Autowired
private UserRepository userRepository;

@Autowired
private BCryptPasswordEncoder passwordEncoder;

public User findByEmail(String email){
	System.out.println("servis " + email);
    return userRepository.findByEmail(email);
}

public User save(User user) {
	return userRepository.save(user);
}

public User findById(long id) {
	return userRepository.findById(id);
}

//public User save(UserRegistrationDto registration){
//    User user = new User();
//    user.setFirstName(registration.getFirstName());
//    user.setLastName(registration.getLastName());
//    user.setEmail(registration.getEmail());
//    user.setPassword(passwordEncoder.encode(registration.getPassword()));
//    user.setRoles(Arrays.asList(new Role("ROLE_USER")));
//    return userRepository.save(user);
//}

public List<User> findAll() {
    return userRepository.findAll();
}

public void deleteByEmail(String email) {
    userRepository.deleteByEmail(email);

}

//@Resource(name = "sessionFactory")
//private SessionFactory  sessionFactory;
//
//public void mergeWithExistingAndUpdate(final User personFromPost) {
//
//    Session session = sessionFactory.getCurrentSession();
//
//    User existingPerson = (User) session.get(User.class, personFromPost.getId());
//
//    // set here explicitly what must/can be overwritten by the html form POST
//    existingPerson.setFirstName(personFromPost.getFirstName());
//    existingPerson.setLastName(personFromPost.getLastName());
//    existingPerson.setEmail(personFromPost.getEmail());
////    existingPerson.setDateModified(new Date());
////    existingPerson.setUserModified(Utils.getCurrentUser());
//
//    session.update(existingPerson);
//}


@Override
public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    User user = userRepository.findByEmail(email);
    if (user == null){
        throw new UsernameNotFoundException("Invalid username or password.");
    }
    return new org.springframework.security.core.userdetails.User(user.getEmail(),
            user.getPassword(),
            mapRolesToAuthorities(user.getRoles()));
}

private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles){
    return roles.stream()
            .map(role -> new SimpleGrantedAuthority(role.getName()))
            .collect(Collectors.toList());
}
}
