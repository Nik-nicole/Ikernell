package com.ikell.solutions.Controllers;

import com.ikell.solutions.Business.CompanyBusiness;
import com.ikell.solutions.Entities.Company;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/companies")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CompanyController {

    @Autowired
    private CompanyBusiness companyBusiness;

    @GetMapping
    public ResponseEntity<List<Company>> getAllCompanies() {
        try {
            List<Company> companies = companyBusiness.findAll();
            return new ResponseEntity<>(companies, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Company> getCompanyById(@PathVariable Long id) {
        try {
            Company company = companyBusiness.findById(id);
            if (company != null) {
                return new ResponseEntity<>(company, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping
    public ResponseEntity<Company> createCompany(@RequestBody Company company) {
        try {
            Company newCompany = companyBusiness.save(company);
            return new ResponseEntity<>(newCompany, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Company> updateCompany(@PathVariable Long id, @RequestBody Company company) {
        try {
            Company existingCompany = companyBusiness.findById(id);
            if (existingCompany != null) {
                company.setId(id);
                Company updatedCompany = companyBusiness.save(company);
                return new ResponseEntity<>(updatedCompany, HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCompany(@PathVariable Long id) {
        try {
            companyBusiness.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
