package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.patients;
import com.example.demo.repository.patientsrepository;

@Service
public class patientservice {

	@Autowired
	
	patientsrepository repo;
	
	public patients addpatient(patients p)
	{ 
		return this.repo.save(p);
	}
	public List<patients>getall()
	{
		return (List<patients>) this.repo.findAll();
	}
	public void deletepatient(long id) {
		repo.deleteById(id);
	}
}
