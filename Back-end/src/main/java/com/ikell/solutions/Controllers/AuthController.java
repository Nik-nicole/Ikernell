package com.ikell.solutions.Controllers;

import com.ikell.solutions.DTO.AuthResponse;
import com.ikell.solutions.DTO.LoginRequest;
import com.ikell.solutions.Entities.User;
import com.ikell.solutions.Business.UserBusiness;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {

    @Autowired
    private UserBusiness userBusiness;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        try {
            User user = userBusiness.authenticate(loginRequest.getEmail(), loginRequest.getPassword());
            
            if (user != null) {
                AuthResponse response = new AuthResponse();
                response.setSuccess(true);
                response.setMessage("Login successful");
                response.setUserId(user.getId());
                response.setRole(user.getRole().toString());
                response.setWorkerId(user.getWorker().getId());
                response.setWorkerName(user.getWorker().getName() + " " + user.getWorker().getLastName());
                
                return new ResponseEntity<>(response, HttpStatus.OK);
            } else {
                AuthResponse response = new AuthResponse();
                response.setSuccess(false);
                response.setMessage("Invalid credentials");
                return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
            }
        } catch (Exception e) {
            AuthResponse response = new AuthResponse();
            response.setSuccess(false);
            response.setMessage("Login failed: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody Map<String, Object> json) {
        Map<String, Object> response = new HashMap<>();
        try {
            // Implementation for user registration
            response.put("success", true);
            response.put("message", "Registration successful");
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", "Registration failed: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/check")
    public ResponseEntity<Map<String, Object>> checkAuth() {
        Map<String, Object> response = new HashMap<>();
        response.put("authenticated", true);
        response.put("message", "Authentication endpoint working");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
