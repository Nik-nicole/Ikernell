package com.ikell.solutions.Business;

import com.ikell.solutions.DTO.WorkerDTO;
import com.ikell.solutions.Entities.Worker;
import com.ikell.solutions.Repository.WorkerRepository;
import com.ikell.solutions.Service.WorkerService;
import com.ikell.solutions.Utilities.CustomException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.w3c.dom.events.EventException;

import java.util.List;

@Component
public class WorkerBusiness {

    @Autowired
    private WorkerService workerService;  // Aquí se añadió @Autowired

    private ModelMapper modelMapper = new ModelMapper();

    public List<Worker> findAllWorker() {return workerService.findAll();}

    public Worker findById(Long id) {return this.workerService.getById(id);}


    public Boolean add(WorkerDTO workerDTO) {
        try {
            Worker worker = modelMapper.map(workerDTO, Worker.class);


            if (this.workerService.existsByEmail(workerDTO.getEmail())) {
                throw new CustomException("Duplicate email: " + worker.getEmail());
            }
            if (this.workerService.existsByIdentification(workerDTO.getIdentification())){
                throw new CustomException("Duplicate identification: "+worker.getIdentification());
            }

            workerService.save(worker);
            return true;
        } catch (Exception e) {
            throw new CustomException("Error adding worker: "+e.getMessage());
        }
    }

    public Boolean delete(Long id) {
        try {
            Worker worker = this.workerService.getById(id);
            workerService.delete(worker);
            return true;
        } catch (Exception e) {
            throw new RuntimeException("Error deleting worker: " + e.getMessage(), e);
        }
    }
}

