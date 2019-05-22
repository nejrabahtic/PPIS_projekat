package com.example.ppis.model;

import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.core.GrantedAuthority;

public class Role implements GrantedAuthority{
   
    private String name;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
 
    public String getName() {
        return name;
    }
 
    public void setName(String name) {
        this.name = name;
    }
 
    public String getAuthority() {
        return this.name;
    }
}
