package com.example.ppis.services;

import com.example.ppis.model.Status;
import com.example.ppis.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@ComponentScan(basePackages = { "com.example.ppis.repository" })
public class StatusService {
    @Autowired
    private StatusRepository statusRepository;

    public List<Status> getAllStatuses() {
        ArrayList<Status> allStatuses = new ArrayList<Status>();
        statusRepository.findAll().forEach(allStatuses::add);
        return allStatuses;
    }

    public Status getStatusById(Integer id) {
        Optional<Status> optionalStatus = statusRepository.findById(id);

        return optionalStatus.orElse(null);
    }

    public Status createStatus(String type){
        Status status = new Status(type);
        return statusRepository.save(status);
    }

    public void deleteStatusById(Integer id) {
        statusRepository.deleteById(id);
    }
}
