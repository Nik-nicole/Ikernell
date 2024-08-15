package com.ikell.solutions.Business;

import com.ikell.solutions.DTO.WorkerDTO;
import com.ikell.solutions.Entities.Worker;
import com.ikell.solutions.Repository.WorkerRepository;
import com.ikell.solutions.Service.WorkerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class WorkerBusiness {

    @Autowired
    private WorkerRepository workerRepository;
    private WorkerService workerService;

    private ModelMapper modelMapper=new ModelMapper();

    public List<Worker> findAll() {
        return workerRepository.findAll();
    }


    public Worker findById(Long id){
        return this.workerService.getById(id);
    }
    public Boolean add(WorkerDTO workerDTO){
        try{
            Worker worker=modelMapper.map(workerDTO,Worker.class);
            this.workerService.save(worker);
            return Boolean.TRUE;
        }catch (Exception e){
            return Boolean.FALSE;

        }
    }

    public Boolean delete(WorkerDTO workerDTO){
        try{
            Worker worker=modelMapper.map(workerDTO,Worker.class);
            this.workerService.delete(worker.getId());
            return Boolean.TRUE;
        }catch (RuntimeException e){
            throw new RuntimeException(e);
        }
    }



}


