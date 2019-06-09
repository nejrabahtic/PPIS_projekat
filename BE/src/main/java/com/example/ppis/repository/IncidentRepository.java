package com.example.ppis.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.ppis.model.Incident;
@Repository
public interface IncidentRepository extends CrudRepository<Incident, Integer> {
}
