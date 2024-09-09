package com.ikell.solutions.Business;

import com.ikell.solutions.DTO.WorkerDTO;
import com.ikell.solutions.Entities.Worker;
import com.ikell.solutions.Repository.WorkerRepository;
import com.ikell.solutions.Service.WorkerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Component
public class WorkerBusiness {

    @Autowired
    private WorkerService workerService;  // Aquí se añadió @Autowired

    private ModelMapper modelMapper = new ModelMapper();

    public List<Worker> findAll() {return workerService.findAll();}

    public Worker findById(Long id) {return this.workerService.getById(id);}


    public Boolean add(WorkerDTO workerDTO) {
        try {
            Worker worker = modelMapper.map(workerDTO, Worker.class);
            workerService.save(worker); // Llama al servicio para guardar el trabajador
            return true;
        } catch (Exception e) {
            e.printStackTrace(); // Registra el error para depuración
            return false;
        }
    }

    public Boolean delete(WorkerDTO workerDTO) {
        try {
            Worker worker = modelMapper.map(workerDTO, Worker.class);
            this.workerService.delete(worker.getId());
            return Boolean.TRUE;
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }
}
