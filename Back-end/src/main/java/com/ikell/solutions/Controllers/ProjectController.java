package com.ikell.solutions.Controllers;

import com.ikell.solutions.Business.ProjectBusiness;
import com.ikell.solutions.DTO.ProjectDTO;
import com.ikell.solutions.Entities.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProjectController {

    @Autowired
    private ProjectBusiness projectBusiness;

    // ===================== GET ALL =====================
    @GetMapping
    public ResponseEntity<List<Project>> getAllProjects() {
        return new ResponseEntity<>(projectBusiness.findAll(), HttpStatus.OK);
    }

    // ===================== GET BY ID =====================
    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
        Project project = projectBusiness.findById(id);
        return project != null
                ? new ResponseEntity<>(project, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // ===================== CREATE =====================
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> createProject(
            @RequestBody Map<String, ProjectDTO> request) {

        Map<String, Object> response = new HashMap<>();

        try {
            ProjectDTO projectDTO = request.get("data");

            if (projectDTO == null) {
                response.put("message", "Missing 'data' object");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }

            if (projectBusiness.add(projectDTO)) {
                response.put("message", "Project added successfully");
                response.put("data", projectDTO);
                return new ResponseEntity<>(response, HttpStatus.CREATED);
            }

            response.put("message", "Failed to add project");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

        } catch (Exception e) {
            response.put("message", "Error processing request: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ===================== UPDATE =====================
    @PutMapping("/update/{id}")
    public ResponseEntity<Map<String, Object>> updateProject(
            @PathVariable Long id,
            @RequestBody Map<String, ProjectDTO> request) {

        Map<String, Object> response = new HashMap<>();

        try {
            ProjectDTO projectDTO = request.get("data");

            if (projectDTO == null) {
                response.put("message", "Missing 'data' object");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }

            projectDTO.setId(id);

            if (projectBusiness.update(projectDTO)) {
                response.put("message", "Project updated successfully");
                response.put("data", projectDTO);
                return new ResponseEntity<>(response, HttpStatus.OK);
            }

            response.put("message", "Project not found");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);

        } catch (Exception e) {
            response.put("message", "Error processing request: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ===================== DELETE =====================
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Object>> deleteProject(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            projectBusiness.delete(id);
            response.put("message", "Project deleted successfully");
            return new ResponseEntity<>(response, HttpStatus.NO_CONTENT);

        } catch (Exception e) {
            response.put("message", "Error deleting project: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
