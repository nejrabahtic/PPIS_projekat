package com.example.ppis.model;

import java.util.Collection;
import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.ppis.model.Role;

@Entity
@Table(name = "user")
public class User {

	 /* Spring Security related fields*/
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(
                    name = "user_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "role_id", referencedColumnName = "id"))
    private Collection<Role> roles;
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column
    @NotEmpty
    private String username;

    @Column
    @NotEmpty
//    @Pattern(regexp="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!?@#$%^&+=])(?=\\S+$).{8,}$",message="Password must satisfy:\nAt least 8 chars\nContains at least one digit\nContains at least one lower alpha char and one upper alpha char\nContains at least one char within a set of special chars (@#%$^ etc.)\nDoes not contain space, tab, etc.")
    private String password;

    @Column
    @NotEmpty
    @Email
    private String email;

    @Column
    @NotEmpty
    private String firstName;

    @Column
    @NotEmpty
    private String lastName;

    @Column
    @NotEmpty
    private String phone;

    @Column
    @NotEmpty
    private String address;

    @ManyToMany
    @JoinTable(
            name = "user_services",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "service_id")
    )
    private List<Services> services;

    public User() {
    }

    public User(@NotEmpty String username, @NotEmpty String password, @NotEmpty @Email String email,
                @NotEmpty String firstName, @NotEmpty String lastName, @NotEmpty String phone,
                @NotEmpty String address, Collection<Role> roles) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.roles = roles;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public Collection<Role> getRoles() {
        return roles;
    }
    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @JsonProperty
    public List<Services> getServices() {
        return services;
    }

    @JsonIgnore
    public void setServices(List<Services> services) {
        this.services = services;
    }

    public void addService(Services service){
        services.add(service);
    }
    public void addAllServices(List<Services> services){
        this.services.addAll(services);
    }
    public void removeService(Services service) {
        services.remove(service);
    }
}
