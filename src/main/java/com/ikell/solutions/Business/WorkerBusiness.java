package com.ikell.solutions.Business;

import com.ikell.solutions.Entities.Worker;
import com.ikell.solutions.Repository.WorkerRepository;
import com.ikell.solutions.Service.WorkerService;

import java.util.List;
import java.util.Optional;

public class WorkerBusiness {

    private WorkerRepository workerRepository;
    private WorkerService workerService;

    public List<Worker> findAll() {
        return workerRepository.findAll();
    }


    public Worker findById(Long id) {
        Optional<Worker> worker = workerRepository.findById(id);
        return worker.orElse(null);
    }


    public Worker save(Worker worker) {

        return workerService.save(worker);
    }


    public void delete(Long id) {

        if (workerRepository.existsById(id)) {
            workerRepository.deleteById(id);
        } else {
            throw new RuntimeException("Worker with id " + id + " not found.");
        }
    }
}


