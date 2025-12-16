package com.ikell.solutions.Controllers;

import com.ikell.solutions.Business.UserBusiness;
import com.ikell.solutions.DTO.UserDTO;
import com.ikell.solutions.DTO.WorkerDTO;
import com.ikell.solutions.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserBusiness userBusiness;

    // ===================== GET ALL =====================
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userBusiness.findAll(), HttpStatus.OK);
    }

    // ===================== GET BY ID =====================
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userBusiness.finById(id);
        return user != null
                ? new ResponseEntity<>(user, HttpStatus.OK)
                : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // ===================== CREATE =====================
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> createUser(
            @RequestBody Map<String, UserDTO> request) {

        Map<String, Object> response = new HashMap<>();

        try {
            UserDTO userDTO = request.get("data");

            if (userDTO == null) {
                response.put("message", "Missing 'data'");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }

            if (userDTO.getWorkerId() == null || userDTO.getCompanyId() == null) {
                response.put("message", "workerId and companyId are required");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }


            if (userBusiness.add(userDTO)) {
                response.put("message", "User added successfully");
                response.put("data", userDTO);
                return new ResponseEntity<>(response, HttpStatus.CREATED);
            }

            response.put("message", "Failed to add user");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);

        } catch (Exception e) {
            response.put("message", "Error processing request: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // ===================== DELETE =====================
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Object>> deleteUser(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            userBusiness.delete(id);
            response.put("message", "User deleted successfully");
            return new ResponseEntity<>(response, HttpStatus.NO_CONTENT);

        } catch (Exception e) {
            response.put("message", "Error deleting user: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
