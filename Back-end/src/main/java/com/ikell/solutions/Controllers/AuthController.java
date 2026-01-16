package com.ikell.solutions.Controllers;

import com.ikell.solutions.DTO.LoginRequest;
import com.ikell.solutions.Entities.User;
import com.ikell.solutions.Business.UserBusiness;
import com.ikell.solutions.config.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final UserBusiness userBusiness;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            System.out.println("Attempting login for email: " + request.getEmail());
            
            // Try to authenticate
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getEmail(),
                            request.getPassword()
                    )
            );
            System.out.println("Authentication successful for: " + request.getEmail());

            // Find user details
            User user = userBusiness.findByEmail(request.getEmail())
                    .orElseThrow(() -> {
                        System.out.println("User not found in database: " + request.getEmail());
                        return new RuntimeException("User not found");
                    });

            // Generate token
            String token = jwtUtil.generateToken(
                    user.getWorker().getEmail(),
                    user.getRole().name()
            );
            System.out.println("Generated token for role: " + user.getRole().name());

            return ResponseEntity.ok(Map.of(
                    "token", token,
                    "role", user.getRole().name()
            ));

        } catch (AuthenticationException e) {
            System.out.println("Authentication failed: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("error", "Invalid email or password", "details", e.getMessage()));
        } catch (Exception e) {
            System.out.println("Unexpected error during login: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("error", "An error occurred during login"));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<Map<String, Object>> register(@RequestBody Map<String, Object> json) {
        Map<String, Object> response = new java.util.HashMap<>();
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
        Map<String, Object> response = new java.util.HashMap<>();
        response.put("authenticated", true);
        response.put("message", "Authentication endpoint working");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
