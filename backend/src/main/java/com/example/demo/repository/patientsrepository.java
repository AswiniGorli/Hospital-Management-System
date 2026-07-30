package com.example.demo.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.patients;

@Repository
public interface patientsrepository extends CrudRepository<patients, Long>{

}
