package com.ikell.solutions.Service;

import com.ikell.solutions.Entities.Worker;
import com.ikell.solutions.Repository.WorkerRepository;
import com.ikell.solutions.Service.dao.Idao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class WorkerService implements Idao <Worker, Long>{

    @Autowired
    private WorkerRepository workerRepository;

    @Override
    public List<Worker> findAll() {
        return this.workerRepository.findAll();
    }

    @Override
    public Worker getById(Long aLong) {
        return this.workerRepository.findById(aLong).orElse(null);
    }

    @Override
    public void save(Worker object){this.workerRepository.save(object);}

    @Override
    public void delete(Worker object) {this.workerRepository.delete(object);}

    public boolean existsByEmail(String email){
        return this.workerRepository.existsByEmail(email);
    }
    public boolean existsByIdentification(Integer identification){
        return  this.workerRepository.existsByIdentification(identification);
    }
}
