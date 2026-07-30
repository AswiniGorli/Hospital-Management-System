package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.doctorsentity;

@Repository

public interface doctorsrepository extends CrudRepository<doctorsentity, Long>{
	Optional<doctorsentity> findByEmail(String email);
}
