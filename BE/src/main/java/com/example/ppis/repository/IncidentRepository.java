package com.example.ppis.repository;

import com.example.ppis.model.Incident;
import org.springframework.data.repository.CrudRepository;

public interface IncidentRepository extends CrudRepository<Incident, Integer> {
}
