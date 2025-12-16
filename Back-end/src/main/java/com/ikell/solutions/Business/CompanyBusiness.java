package com.ikell.solutions.Business;

import com.ikell.solutions.DTO.CompanyDTO;
import com.ikell.solutions.Entities.Company;
import com.ikell.solutions.Service.CompanyService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyBusiness {

    @Autowired
    private CompanyService companyService;
    
    private ModelMapper modelMapper = new ModelMapper();

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

    public Boolean add(CompanyDTO companyDTO) {
        try {
            Company company = modelMapper.map(companyDTO, Company.class);
            companyService.save(company);
            return Boolean.TRUE;
        } catch (Exception e) {
            return Boolean.FALSE;
        }
    }

    public void deleteById(Long id) {
        Company company = companyService.getById(id);
        if (company != null) {
            companyService.delete(company);
        }
    }
}
