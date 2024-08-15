package com.ikell.solutions.Service;

import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Entities.Type_Worker;
import com.ikell.solutions.Repository.Type_WorkerRepository;
import com.ikell.solutions.Service.dao.Idao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;


@Service
public class Type_WorkerService implements Idao<Type_Worker, Long>{

    @Autowired
    private Type_WorkerRepository type_workerRepository;

    @Override
    public List<Type_Worker> findAll() {
        return this.type_workerRepository.findAll();
    }

    @Override
    public Type_Worker getById(Long aLong) {
        return  this.type_workerRepository.getReferenceById(aLong);
    }

    @Override
    public Type_Worker save(Type_Worker object) {
        return this.type_workerRepository.save(object);
    }

    @Override
    public void delete(Long id){
        Type_Worker  type_worker=this.type_workerRepository.getById(id);
        if (type_worker !=null){
            this.type_workerRepository.delete(type_worker);
        }
         }
}
