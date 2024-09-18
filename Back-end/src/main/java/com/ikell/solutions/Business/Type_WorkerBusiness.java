package com.ikell.solutions.Business;


import com.ikell.solutions.DTO.Type_WorkerDTO;
import com.ikell.solutions.Entities.Type_Worker;
import com.ikell.solutions.Service.Type_WorkerService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class Type_WorkerBusiness {
    @Autowired
    private Type_WorkerService type_workerService;
    private ModelMapper modelMapper=new ModelMapper();

    public List<Type_Worker> findAll() {
        return  this.type_workerService.findAll();
    }

    public Type_Worker findById(Long id){
        return this.type_workerService.getById(id);
    }

    public Boolean add(Type_WorkerDTO typeWorkerDTO){
        try{
            Type_Worker type_worker=modelMapper.map(typeWorkerDTO,Type_Worker.class);
            this.type_workerService.save(type_worker);
            return Boolean.TRUE;
        }catch (Exception e){
            return Boolean.FALSE;
        }
    }

    public Boolean delete(Long id){
        try{
            Type_Worker type_worker = type_workerService.getById(id);
            type_workerService.delete(type_worker);
            return true;
        }catch (RuntimeException e){
            throw new RuntimeException(e);
        }
    }







}
