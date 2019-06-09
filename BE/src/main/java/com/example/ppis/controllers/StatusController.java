package com.example.ppis.controllers;

import com.example.ppis.model.Incident;
import com.example.ppis.model.Status;
import com.example.ppis.services.IncidentService;
import com.example.ppis.services.StatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("status")
public class StatusController {
    @Autowired
    private StatusService statusService;

    @CrossOrigin
    @GetMapping()
    private ResponseEntity<List<Status>> getAllStatuses(){
        return new ResponseEntity<>(statusService.getAllStatuses(), HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping(path="/{id}")
    private ResponseEntity<Status> getStatusById(@PathVariable Integer id){
        Status status = statusService.getStatusById(id);
        if(status == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(status, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping(consumes = {"application/json"})
    private ResponseEntity<Status> createStatus(@RequestBody Status status){
        return new ResponseEntity<>(statusService.createStatus(status.getType()), HttpStatus.CREATED);
    }

    @CrossOrigin
    @DeleteMapping(path="{id}")
    private ResponseEntity<Void> deleteStatusById(@PathVariable Integer id){
        Status status = statusService.getStatusById(id);
        if(status == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        statusService.deleteStatusById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
