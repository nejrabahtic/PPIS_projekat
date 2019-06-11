package com.example.ppis.services;

import com.example.ppis.model.Incident;
import com.example.ppis.model.Request;
import com.example.ppis.model.Status;
import com.example.ppis.repository.IncidentRepository;
import com.example.ppis.repository.RequestRepository;
import com.example.ppis.repository.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class SeederService {

    @Autowired
    private RequestRepository requestRepository;

    @Autowired
    private IncidentRepository incidentRepository;

    @Autowired
    private StatusRepository statusRepository;

    public void seedRequestTable() {
        ArrayList<Request> requests = new ArrayList<>();

        requests.add(new Request("Prvi request", "Description prvog requesta", "Printing"));
        requests.add(new Request("Drugi request", "Description drugog requesta", "Editing"));
        requests.add(new Request("Treći request", "Description trećeg requesta", "Marketing"));
        requests.add(new Request("Četvrti request", "Description četvrtog requesta", "Distribution"));

        if (requestRepository.count() == 0) {
            requestRepository.saveAll(requests);
        }
    }

    public void seedIncidentTable() {
        ArrayList<Incident> incidents = new ArrayList<>();

        incidents.add(new Incident("Prvi incident", "Description prvog incidenta", "Distribution"));
        incidents.add(new Incident("Drugi incident", "Description drugog incidenta", "Printing"));
        incidents.add(new Incident("Treći incident", "Description trećeg incidenta", "Marketing"));
        incidents.add(new Incident("Četvrti incident", "Description četvrtog incidenta", "Editing"));

        if (incidentRepository.count() == 0) {
            incidentRepository.saveAll(incidents);
        }
    }

    public void seedStatusTable() {
        ArrayList<Status> statuses = new ArrayList<>();

        statuses.add(new Status("Created"));
        statuses.add(new Status("In progress"));
        statuses.add(new Status("Pending"));
        statuses.add(new Status("Closed"));
        // iz dokumentacije
        statuses.add(new Status("Waiting approval"));
        statuses.add(new Status("Approved"));
        statuses.add(new Status("In process"));
        statuses.add(new Status("Waiting review"));
        statuses.add(new Status("In review"));
        statuses.add(new Status("Fullfiled"));
        statuses.add(new Status("Rejected"));

        if (statusRepository.count() == 0) {
            statusRepository.saveAll(statuses);
        }
    }
}
