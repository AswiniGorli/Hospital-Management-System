package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.doctorsentity;
import com.example.demo.services.doctorservices;


@RestController
@RequestMapping("/api/doctor")

@CrossOrigin(origins="http://localhost:4200")
public class doctorcontroller {
	@Autowired
	doctorservices service;
	
	
	@PostMapping("/insert")
	public doctorsentity addemploye(@RequestBody doctorsentity d)
	{
		return this.service.adddoctor(d);
	}
	
	@GetMapping("/getall")
	public List<doctorsentity>getall()
	{
		return this.service.getall();
	}
	
	@GetMapping("/deletedoctor/{id}")
	public String deletebyid(@PathVariable("id") long id)
	{
		service.deletedoctor(id);
		return "deleted..!";
	}
	
	@GetMapping("/getbyid/{id}")
	public Optional<doctorsentity> getbyid(@PathVariable Long id)
	{
		return this.service.getbyid(id);
	}
	
	@PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody doctorsentity loginRequest) {
        Optional<doctorsentity> userOpt = service.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (userOpt.isPresent()) {
            return ResponseEntity.ok(userOpt.get());  // Login success - return user data
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
	
}
