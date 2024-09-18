package com.ikell.solutions.Controllers;


import com.ikell.solutions.Business.UserBusiness;
import com.ikell.solutions.DTO.UserDTO;
import com.ikell.solutions.DTO.WorkerDTO;
import com.ikell.solutions.Entities.Type_Worker;
import com.ikell.solutions.Entities.User;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/User")
public class UserController {

    @Autowired
    private UserBusiness userBusiness;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> User = userBusiness.findAll();
        return   new ResponseEntity<>(User, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userBusiness.finById(id);
        if (user != null) {
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping ("/add")
    public Map<String, Object> CreateUser(@RequestBody Map<String, Object> json){
        Map<String, Object> response = new HashMap<>();

        try {
            UserDTO userDTO = new UserDTO();
            WorkerDTO workerDTO = new WorkerDTO();
            JSONObject jsonObject = new JSONObject(json);

            JSONObject dataObject = jsonObject.getJSONObject("data");
            userDTO.setPassword(dataObject.getString("password"));
            workerDTO.setId(dataObject.getJSONObject("worker").getLong("id"));
            userDTO.setWorkerDTO(workerDTO);

            if(this.userBusiness.add(userDTO)){
                response.put("message","User added successfully");
                response.put("User",userDTO);
                return (response);
            }else {
                response.put("message", "Failed to add User");
                return (response);
            }
        }catch (Exception e){
            e.printStackTrace();
            response.put("message", "Error processing request: " + e.getMessage());
            return (response);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Object>> deleteUser(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            userBusiness.delete(id);
            response.put("message:","User deleted successfully");
            return new ResponseEntity<>(response, HttpStatus.NO_CONTENT);

        } catch (Exception e) {
            // Manejo de excepciones generales
            response.put("message", "Error deleting user: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}

