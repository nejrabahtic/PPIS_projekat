package com.example.ppis.controllers;

import com.example.ppis.model.Incident;
import com.example.ppis.services.IncidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("incident")
public class IncidentController {
    @Autowired
    private IncidentService incidentService;

    @CrossOrigin(origins = "*")
    @GetMapping()
    private ResponseEntity<List<Incident>> getAllIncidents(){
        return new ResponseEntity<>(incidentService.getAllIncidents(), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @GetMapping(path="/{id}")
    private ResponseEntity<Incident> getIncidentById(@PathVariable Integer id){
        Incident incident = incidentService.getIncidentById(id);
        if(incident == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(incident, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping(consumes = {"application/json"})
    private ResponseEntity<Incident> createIncident(@RequestBody Incident incident){
        return new ResponseEntity<>(incidentService.createIncident(incident.getTitle(), incident.getDescription(),
                incident.getCategory()), HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping(path="{id}")
    private ResponseEntity<Void> deleteIncidentById(@PathVariable Integer id){
        Incident incident = incidentService.getIncidentById(id);
        if(incident == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        incidentService.deleteIncidentById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
