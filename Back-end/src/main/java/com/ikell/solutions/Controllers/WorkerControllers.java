package com.ikell.solutions.Controllers;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.ikell.solutions.Business.WorkerBusiness;
import com.ikell.solutions.DTO.Type_WorkerDTO;
import com.ikell.solutions.DTO.WorkerDTO;
import com.ikell.solutions.Entities.Worker;
import com.ikell.solutions.Utilities.CustomException;
import org.apache.coyote.Response;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.events.EventException;

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
    public ResponseEntity<Map<String,Object>> getAllWorkers() {
        List<Worker> workers = workerBusiness.findAllWorker();
        Map<String,Object> response=new HashMap<>();
        response.put("status",HttpStatus.ACCEPTED);
        response.put("data", workers);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("/worker/{id}")
    public ResponseEntity<Worker> getWorkerById(@PathVariable Long id) {
        Worker worker = workerBusiness.findById(id);
        if (worker != null) {
            return new ResponseEntity<>(worker, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }



    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(@RequestBody Map<String, Object> json) {
        Map<String, Object> response = new HashMap<>();
        try {
            WorkerDTO workerDTO = new WorkerDTO();
            JSONObject jsonObject = new JSONObject(json);

            JSONObject dataObject = jsonObject.getJSONObject("data");
            workerDTO.setId(0L);
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
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                response.put("message", "Failed to add worker");
                return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
            }

        } catch (CustomException e) {
            response.put("message", e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

        } catch (Exception e) {
            e.printStackTrace();
            response.put("message", "Error processing request: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.CONFLICT);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            // Crear un DTO para pasar solo el ID
            workerBusiness.delete(id);
            response.put("message", "Worker deleted successfully");
            return new ResponseEntity<>(response, HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            // Manejar excepciones generales
            response.put("message", "Failed to delete worker: " + e);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

}
