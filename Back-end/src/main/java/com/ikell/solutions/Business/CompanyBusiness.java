package com.ikell.solutions.Business;

import com.ikell.solutions.Entities.Company;
import com.ikell.solutions.Service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyBusiness {

    @Autowired
    private CompanyService companyService;

    public List<Company> findAll() {
        return companyService.findAll();
    }

    public Company findById(Long id) {
        return companyService.getById(id);
    }

    public Company save(Company company) {
        companyService.save(company);
        return company;
    }

    public void deleteById(Long id) {
        Company company = companyService.getById(id);
        if (company != null) {
            companyService.delete(company);
        }
    }
}
