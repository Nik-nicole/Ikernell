package com.ikell.solutions.Controllers;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.ikell.solutions.Business.WorkerBusiness;
import com.ikell.solutions.DTO.Type_WorkerDTO;
import com.ikell.solutions.DTO.WorkerDTO;
import com.ikell.solutions.Entities.Worker;
import org.apache.coyote.Response;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

    @GetMapping("/get/{id}")
    public ResponseEntity<Worker> getWorkerById(@PathVariable Long id) {
        Worker worker = workerBusiness.findById(id);
        if (worker != null) {
            return new ResponseEntity<>(worker, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }/*
    /*@PostMapping
    public ResponseEntity<String> createWorker(@RequestBody WorkerDTO workerDTO) {
        Boolean success = workerBusiness.add(workerDTO);
        if (success) {
            return new ResponseEntity<>("Type Worker created successfully", HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>("Failed to create  Worker", HttpStatus.BAD_REQUEST);
        }*/

    @PostMapping("/add")
    public Map<String, Object> add(@RequestBody Map<String, Object> json) {
        Map<String, Object> response = new HashMap<>();
        try {
            WorkerDTO workerDTO = new WorkerDTO();
            JSONObject jsonObject = new JSONObject(json);

            JSONObject dataObject = jsonObject.getJSONObject("data");
            workerDTO.setName(dataObject.getString("name"));
            workerDTO.setLastName(dataObject.getString("lastName"));
            workerDTO.setEmail(dataObject.getString("email"));
            workerDTO.setDirection(dataObject.getString("direction"));
            workerDTO.setDateBorn(new Date(dataObject.getLong("dateBorn")));
            workerDTO.setIdentification(dataObject.getInt("identification"));
            workerDTO.setProfession(dataObject.getString("profession"));
            workerDTO.setSpecialtyDev(dataObject.getString("specialtyDev"));

            if (this.workerBusiness.add(workerDTO)) {
                response.put("message", "Worker added successfully");
                response.put("worker", workerDTO);
                return (response);
            } else {
                response.put("message", "Failed to add worker");
                return (response);
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.put("message", "Error processing request: " + e.getMessage());
            return (response);
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
