package com.example.ppis.services;

import com.example.ppis.model.Incident;
import com.example.ppis.repository.IncidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@ComponentScan(basePackages = { "com.example.ppis.repository" })
public class IncidentService {
    @Autowired
    private IncidentRepository incidentRepository;

    public List<Incident> getAllIncidents() {
        ArrayList<Incident> allIncidents = new ArrayList<Incident>();
        incidentRepository.findAll().forEach(allIncidents::add);
        return allIncidents;
    }

    public Incident getIncidentById(Integer id) {
        Optional<Incident> optionalIncident = incidentRepository.findById(id);

        return optionalIncident.orElse(null);
    }

    public Incident createIncident(String title, String description, String category){
        Incident incident = new Incident(title, description, category);
        return incidentRepository.save(incident);
    }

    public void deleteIncidentById(Integer id) {
        incidentRepository.deleteById(id);
    }
}
