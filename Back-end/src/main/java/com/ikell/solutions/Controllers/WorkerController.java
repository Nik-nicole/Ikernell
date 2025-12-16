package com.ikell.solutions.Controllers;

import com.ikell.solutions.Business.WorkerBusiness;
import com.ikell.solutions.DTO.WorkerDTO;
import com.ikell.solutions.Entities.Worker;
import com.ikell.solutions.Utilities.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/workers")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class WorkerController {

    @Autowired
    private WorkerBusiness workerBusiness;

    // ===================== GET ALL =====================
    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllWorkers() {
        Map<String, Object> response = new HashMap<>();
        List<Worker> workers = workerBusiness.findAllWorker();

        response.put("status", HttpStatus.OK.value());
        response.put("data", workers);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    // ===================== GET BY ID =====================
    @GetMapping("/{id}")
    public ResponseEntity<Worker> getWorkerById(@PathVariable Long id) {
        Worker worker = workerBusiness.findById(id);
        return worker != null
                ? new ResponseEntity<>(worker, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // ===================== CREATE =====================
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> addWorker(
            @RequestBody Map<String, WorkerDTO> request) {

        Map<String, Object> response = new HashMap<>();

        try {
            WorkerDTO workerDTO = request.get("data");

            if (workerDTO == null) {
                response.put("message", "Missing 'data' object");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }

            if (workerBusiness.add(workerDTO)) {
                response.put("message", "Worker added successfully");
                response.put("data", workerDTO);
                return new ResponseEntity<>(response, HttpStatus.CREATED);
            }

            response.put("message", "Failed to add worker");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

        } catch (CustomException e) {
            response.put("message", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

        } catch (Exception e) {
            response.put("message", "Error processing request: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ===================== DELETE =====================
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Object>> deleteWorker(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            workerBusiness.delete(id);
            response.put("message", "Worker deleted successfully");
            return new ResponseEntity<>(response, HttpStatus.NO_CONTENT);

        } catch (Exception e) {
            response.put("message", "Failed to delete worker: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
