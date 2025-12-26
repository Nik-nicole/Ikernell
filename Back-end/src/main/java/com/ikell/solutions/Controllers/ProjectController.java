package com.ikell.solutions.Controllers;

import com.ikell.solutions.Business.ProjectBusiness;
import com.ikell.solutions.DTO.ProjectDTO;
import com.ikell.solutions.DTO.ProjectResponseDTO;
import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Utilities.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*")
public class ProjectController {

    @Autowired
    private ProjectBusiness projectBusiness;

    // GET ALL
    @GetMapping
    public ResponseEntity<List<Project>> getAll() {
        return ResponseEntity.ok(projectBusiness.findAll());
    }

    // GET BY ID
    @GetMapping("/{id}")
    public ResponseEntity<Project> getById(@PathVariable Long id) {
        return ResponseEntity.ok(projectBusiness.findById(id));
    }

    // CREATE
    @PostMapping("/add")
    public ResponseEntity<?> create(@RequestBody ProjectDTO dto) {
        Project project = projectBusiness.add(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(project);
    }

    // UPDATE
    @PutMapping("/{id}")
    public ResponseEntity<ProjectResponseDTO> update(
            @PathVariable Long id,
            @RequestBody ProjectDTO dto) {

        dto.setId(id);
        Project project = projectBusiness.update(dto);

        return ResponseEntity.ok(
                projectBusiness.toResponse(project)
        );
    }


    // UPDATE WORKERS
    @PutMapping("/{id}/workers")
    public ResponseEntity<?> updateWorkers(
            @PathVariable Long id,
            @RequestBody List<Long> workerIds) {

        if (workerIds == null) {
            throw new CustomException("workerIds cannot be null");
        }

        projectBusiness.updateWorkers(id, workerIds);
        return ResponseEntity.ok(Map.of("message", "Workers updated"));
    }

    // DELETE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        projectBusiness.delete(id);
        return ResponseEntity.noContent().build();
    }
}
