package com.ikell.solutions.Controllers;

import com.ikell.solutions.Business.WorkerBusiness;
import com.ikell.solutions.DTO.WorkerDTO;
import com.ikell.solutions.Entities.Worker;
import com.ikell.solutions.Utilities.CustomException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/workers")
@CrossOrigin(origins = "*")
public class WorkerController {

    private final WorkerBusiness workerBusiness;

    public WorkerController(WorkerBusiness workerBusiness) {
        this.workerBusiness = workerBusiness;
    }

    // ===================== GET ALL =====================
    @GetMapping
    public ResponseEntity<List<Worker>> getAllWorkers() {
        return ResponseEntity.ok(workerBusiness.findAll());
    }

    // ===================== GET BY ID =====================
    @GetMapping("/{id}")
    public ResponseEntity<Worker> getWorkerById(@PathVariable Long id) {
        return ResponseEntity.ok(workerBusiness.findById(id));
    }

    // ===================== CREATE =====================
    @PostMapping
    public ResponseEntity<Worker> createWorker(@RequestBody WorkerDTO workerDTO) {
        Worker savedWorker = workerBusiness.create(workerDTO);
        return new ResponseEntity<>(savedWorker, HttpStatus.CREATED);
    }

    // ===================== DELETE =====================
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorker(@PathVariable Long id) {
        workerBusiness.delete(id);
        return ResponseEntity.noContent().build();
    }
}
