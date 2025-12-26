package com.ikell.solutions.Service;

import com.ikell.solutions.Entities.Company;
import com.ikell.solutions.Repository.CompanyRepository;
import com.ikell.solutions.Service.dao.Idao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService implements Idao<Company, Long> {

    @Autowired
    private CompanyRepository companyRepository;

    @Override
    public List<Company> findAll() {
        return companyRepository.findAll();
    }

    @Override
    public Company getById(Long id) {
        return companyRepository.findById(id).orElse(null);
    }

    @Override
    public Company save(Company entity) {
        return companyRepository.save(entity);
    }

    @Override
    public void delete(Company entity) {
        companyRepository.delete(entity);
    }
}
