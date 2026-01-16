package com.ikell.solutions.Business;

import com.ikell.solutions.DTO.WorkerDTO;
import com.ikell.solutions.Entities.Company;
import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Entities.Worker;
import com.ikell.solutions.Repository.CompanyRepository;
import com.ikell.solutions.Service.WorkerService;
import com.ikell.solutions.Utilities.CustomException;

import jakarta.persistence.EntityNotFoundException;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Component
@Transactional
public class WorkerBusiness {

    private final WorkerService workerService;
    private final CompanyRepository companyRepository;
    private final ModelMapper modelMapper;

    public WorkerBusiness(WorkerService workerService, ModelMapper modelMapper, CompanyRepository companyRepository) {
        this.workerService = workerService;
        this.modelMapper = modelMapper;
        this.companyRepository = companyRepository;
    }

    public List<Worker> findAll() {
        return workerService.findAll();
    }

    public Worker findById(Long id) {

        Worker worker = workerService.getById(id);

        if (worker == null) {
            throw new CustomException("Worker not found with id: " + id);
        }

        return worker;
    }


    public Worker create(WorkerDTO dto) {

        if (workerService.existsByEmail(dto.getEmail())) {
            throw new CustomException("Email already exists");
        }

        if (workerService.existsByIdentification(dto.getIdentification())) {
            throw new CustomException("Identification already exists");
        }

        Worker worker = modelMapper.map(dto, Worker.class);
        worker.setId_projectList(new ArrayList<>()); // ✅ IMPORTANTE

        Company company = companyRepository.findById(dto.getCompanyId())
        .orElseThrow(() -> new EntityNotFoundException("Compañía no encontrada"));
    
            worker.setCompany(company);
            return workerService.save(worker);
    }

    public void delete(Long id) {
        Worker worker = findById(id);

        // limpiar relaciones
        for (Project project : worker.getId_projectList()) {
            project.getId_workerList().remove(worker);
        }

        workerService.delete(worker);
    }
}
