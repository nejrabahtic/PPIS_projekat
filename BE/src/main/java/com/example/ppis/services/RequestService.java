package com.example.ppis.services;

import com.example.ppis.model.Request;
import com.example.ppis.repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class RequestService {
    @Autowired
    private RequestRepository requestRepository;

    public List<Request> getAllRequests() {
        ArrayList<Request> allRequests = new ArrayList<Request>();
        requestRepository.findAll().forEach(allRequests::add);
        return allRequests;
    }

    public Request getRequestById(Integer id) {
        Optional<Request> optionalRequest = requestRepository.findById(id);

        return optionalRequest.orElse(null);
    }

    public Request createRequest(String title, String description, String category){
        Request request = new Request(title, description, category);
        return requestRepository.save(request);
    }

    public void deleteRequestById(Integer id) {
        requestRepository.deleteById(id);
    }
}
