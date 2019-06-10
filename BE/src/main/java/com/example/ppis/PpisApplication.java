package com.example.ppis;

import java.util.Arrays;

import com.example.ppis.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.event.EventListener;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.ppis.model.Role;
import com.example.ppis.model.User;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
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
        };
    }

	@Autowired
	private SeederService seederService;

	@EventListener(ApplicationReadyEvent.class)
	public void seedDatabase(){
		seederService.seedStatusTable();
		seederService.seedIncidentTable();
		seederService.seedRequestTable();
	}

	/*@Bean
	public CommandLineRunner demoRequests (RequestService requestService) {
		return args -> {
			requestService.createRequest("Prvi request", "Description prvog requesta", "Printing");
			requestService.createRequest("Drugi request", "Description drugog requesta", "Editing");
			requestService.createRequest("Treći request", "Description trećeg requesta", "Marketing");
			requestService.createRequest("Četvrti request", "Description četvrtog requesta", "Distribution");
		};
	}*/

	/*@Bean
	public CommandLineRunner demoIncidents (IncidentService incidentService) {
		return args -> {
			incidentService.createIncident("Prvi incident", "Description prvog incidenta", "Distribution");
			incidentService.createIncident("Drugi incident", "Description drugog incidenta", "Printing");
			incidentService.createIncident("Treći incident", "Description trećeg incidenta", "Marketing");
			incidentService.createIncident("Četvrti incident", "Description četvrtog incidenta", "Editing");
		};
	}*/

	/*@Bean
	public CommandLineRunner demoStatuses (StatusService statusService) {
		return  args -> {
			statusService.createStatus("Created");
			statusService.createStatus("In progress");
			statusService.createStatus("Pending");
			statusService.createStatus("Closed");
			// iz dokumentacije
			statusService.createStatus("Waiting approval");
			statusService.createStatus("Approved");
			statusService.createStatus("In process");
			statusService.createStatus("Waiting review");
			statusService.createStatus("In review");
			statusService.createStatus("Fullfiled");
			statusService.createStatus("Rejected");
		};
	}*/

}
