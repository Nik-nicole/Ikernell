package com.ikell.solutions.Controller;

import com.ikell.solutions.Business.Type_WorkerBusiness;
import com.ikell.solutions.DTO.Type_WorkerDTO;
import com.ikell.solutions.Entities.Type_Worker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/type-workers")
public class Type_WorkerControllers {

    @Autowired
    private Type_WorkerBusiness typeWorkerBusiness;

    @GetMapping
    public ResponseEntity<List<Type_Worker>> getAllTypeWorkers() {
        List<Type_Worker> typeWorkers = typeWorkerBusiness.findAll();
        return new ResponseEntity<>(typeWorkers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Type_Worker> getTypeWorkerById(@PathVariable Long id) {
        Type_Worker typeWorker = typeWorkerBusiness.findById(id);
        if (typeWorker != null) {
            return new ResponseEntity<>(typeWorker, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<String> createTypeWorker(@RequestBody Type_WorkerDTO typeWorkerDTO) {
        Boolean success = typeWorkerBusiness.add(typeWorkerDTO);
        if (success) {
            return new ResponseEntity<>("Type Worker created successfully", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Failed to create Type Worker", HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> updateTypeWorker(@PathVariable Long id) {
        Type_WorkerDTO typeWorkerDTO = new Type_WorkerDTO();
        typeWorkerDTO.setId(id);
        Boolean success = typeWorkerBusiness.delete(typeWorkerDTO);
        if (success) {
            return new ResponseEntity<>("Type Worker deleted successfully", HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>("Failed to delete Type Worker", HttpStatus.NOT_FOUND);
        }
    }
}
