package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.doctorsentity;
import com.example.demo.repository.doctorsrepository;

@Service
public class doctorservices {
	@Autowired 
	doctorsrepository repo;
	
//insert
	public doctorsentity adddoctor(doctorsentity d)
	{ 
		return this.repo.save(d);
	}
	//get all
	public List<doctorsentity> getall()
	{
		return (List<doctorsentity>) this.repo.findAll();
	}
	//delete
	public void deletedoctor(long id) {
		repo.deleteById(id);
	}
	//get by id
	public  Optional<doctorsentity> getbyid(Long id) {
		
		return this.repo.findById(id);
	}
//login
	public Optional<doctorsentity> loginUser(String email, String password) {
	    Optional<doctorsentity> docOpt = repo.findByEmail(email);
	    if (docOpt.isPresent()) {
	    	doctorsentity doc = docOpt.get();
	        if (doc.getPassword().equals(password)) {
	            return Optional.of(doc);
	        }
	    }
	    return Optional.empty();
	}
	
	
}