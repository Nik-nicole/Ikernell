package com.ikell.solutions.Controllers;


import com.ikell.solutions.Business.ProjectBusiness;
import com.ikell.solutions.DTO.ProjectDTO;
import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Entities.User;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("api/project")
public class ProjectController {

    @Autowired
    private ProjectBusiness projectBusiness;

    @GetMapping

    public ResponseEntity<List<Project>> getAllWorkers(){
        List<Project> projects = projectBusiness.findAll();
        return new ResponseEntity<>(projects, HttpStatus.OK);

    }

    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectsId(@PathVariable Long id){
        Project project = projectBusiness.findById(id);
        if (project !=null){
            return new ResponseEntity<>(project, HttpStatus.OK);

        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/add")
    public Map<String, Object> createProject(@RequestBody Map<String, Object> json){
        Map<String, Object> response = new HashMap<>();

        try{
            ProjectDTO projectDTO = new ProjectDTO();
            JSONObject jsonObject = new JSONObject(json);

            JSONObject dataObject = jsonObject.getJSONObject("data");
            projectDTO.setName(dataObject.getString("name"));
            projectDTO.setDescription(dataObject.getString("Description"));
            projectDTO.setDate_start(new Date(dataObject.getLong("date_start")));
            projectDTO.setDate_end(new Date(dataObject.getLong("date_end")));
            projectDTO.setState(dataObject.getString("state"));

            if (this.projectBusiness.add(projectDTO)){
                response.put("message", "Project is added successfully");
                response.put("project", projectDTO);
                return (response);

            }else {
                response.put("message","Falied to add project");
                return (response);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            response.put("message", "Error processing request: " + e.getMessage());
            return (response);
        }

    }

    @PostMapping("/update")
    public Map<String, Object> update(@RequestBody Map<String, Object> json){
        Map<String, Object> response = new HashMap<>();

        try{
            ProjectDTO projectDTO = new ProjectDTO();
            JSONObject jsonObject = new JSONObject(json);

            JSONObject dataObject = jsonObject.getJSONObject("data");
            projectDTO.setName(dataObject.getString("name"));
            projectDTO.setDescription(dataObject.getString("Description"));
            projectDTO.setDate_start(new Date(dataObject.getLong("date_start")));
            projectDTO.setDate_end(new Date(dataObject.getLong("date_end")));
            projectDTO.setState(dataObject.getString("state"));

            if (this.projectBusiness.update(projectDTO)){
                response.put("message", "Project is edited and saved successfully");
                response.put("project", projectDTO);
                return (response);

            }else {
                response.put("message","Falied to save  project");
                return (response);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            response.put("message", "Error processing request: " + e.getMessage());
            return (response);
        }

    }

    @DeleteMapping("/delete/{id}")
    public  ResponseEntity<Map<String, Object>> deleteProject(@PathVariable Long id){
       Map<String,Object> response = new HashMap<>();

       try{
           projectBusiness.delete(id);
           response.put("message","Project deleted successfully");
           return new ResponseEntity<>(response, HttpStatus.NO_CONTENT);
       }catch (Exception e){
           response.put("message","Error deleting user: "+ e.getMessage());
           return  new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
       }
    }

}

