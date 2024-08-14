package com.ikell.solutions.Business;


import com.ikell.solutions.Entities.Type_Worker;
import com.ikell.solutions.Repository.Type_WorkerRepository;
import com.ikell.solutions.Service.Type_WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
@Component
public class Type_WorkerBusiness {
    @Autowired
    private Type_WorkerService type_workerService;


    public List<Type_Worker> findAll() {
        return  this.type_workerService.findAll();
    }

    public Type_Worker findById(Long id){
           return this.type_workerService.getById(id);
    }

}
