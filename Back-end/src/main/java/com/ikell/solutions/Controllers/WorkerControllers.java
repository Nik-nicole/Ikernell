package com.ikell.solutions.Controllers;

import com.ikell.solutions.Business.WorkerBusiness;
import com.ikell.solutions.DTO.Type_WorkerDTO;
import com.ikell.solutions.DTO.WorkerDTO;
import com.ikell.solutions.Entities.Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workers")
public class WorkerControllers {

    @Autowired
    private WorkerBusiness workerBusiness;

    @GetMapping
    public ResponseEntity<List<Worker>> getAllWorkers() {
        List<Worker> workers = workerBusiness.findAll();
        return new ResponseEntity<>(workers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Worker> getWorkerById(@PathVariable Long id) {
        Worker worker = workerBusiness.findById(id);
        if (worker != null) {
            return new ResponseEntity<>(worker, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    /*@PostMapping
    public ResponseEntity<String> createWorker(@RequestBody WorkerDTO workerDTO) {
        Boolean success = workerBusiness.add(workerDTO);
        if (success) {
            return new ResponseEntity<>("Type Worker created successfully", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Failed to create  Worker", HttpStatus.BAD_REQUEST);
        }*/


    @PostMapping
    public ResponseEntity<String> createWorker(@RequestBody WorkerDTO workerDTO) {
        try {
            Boolean success = workerBusiness.add(workerDTO);
            if (success) {
                return new ResponseEntity<>("Worker created successfully", HttpStatus.CREATED);
            } else {
                return new ResponseEntity<>("Failed to create worker", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>("Error processing request: " + e.getMessage(), HttpStatus.BAD_REQUEST);
        }

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteWorker(@PathVariable Long id) {
        WorkerDTO workerDTO = new WorkerDTO();  // Se crea un DTO para pasar solo el ID
        workerDTO.setId(id);
        Boolean success = workerBusiness.delete(workerDTO);
        if (success) {
            return new ResponseEntity<>("Worker deleted successfully", HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Failed to delete worker", HttpStatus.NOT_FOUND);
        }
    }
}
