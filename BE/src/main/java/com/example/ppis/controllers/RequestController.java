package com.example.ppis.controllers;

import com.example.ppis.model.Incident;
import com.example.ppis.model.Request;
import com.example.ppis.services.IncidentService;
import com.example.ppis.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("request")
public class RequestController {
    @Autowired
    private RequestService requestService;

    @CrossOrigin(origins = "*")
    @GetMapping()
    private ResponseEntity<List<Request>> getAllRequests(){
        return new ResponseEntity<>(requestService.getAllRequests(), HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @GetMapping(path="/{id}")
    private ResponseEntity<Request> getRequestById(@PathVariable Integer id){
        Request request = requestService.getRequestById(id);
        if(request == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(request, HttpStatus.OK);
    }

    @CrossOrigin(origins = "*")
    @PostMapping(consumes = {"application/json"})
    private ResponseEntity<Request> createRequest(@RequestBody Request request){
        return new ResponseEntity<>(requestService.createRequest(request.getTitle(), request.getDescription(),
                request.getCategory()), HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping(path="{id}")
    private ResponseEntity<Void> deleteRequestById(@PathVariable Integer id){
        Request request = requestService.getRequestById(id);
        if(request == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        requestService.deleteRequestById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
