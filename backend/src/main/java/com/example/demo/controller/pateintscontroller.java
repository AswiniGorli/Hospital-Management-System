package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.patients;
import com.example.demo.services.patientservice;

@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins ="*")
public class pateintscontroller {
	
@Autowired

patientservice service;

@PostMapping("/insert")
public patients addemploye(@RequestBody patients d)
{
	return this.service.addpatient(d);
}
@GetMapping("/getall")
public List<patients>getall()
{
	return this.service.getall();
}
@GetMapping("/deletepatients/{id}")
public String deletebyid(@PathVariable("id") long id)
{
	service.deletepatient(id);
	return "deleted..!";
}


}
