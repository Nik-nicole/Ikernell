package com.ikell.solutions.Controllers;

import com.ikell.solutions.Business.CompanyBusiness;
import com.ikell.solutions.DTO.CompanyDTO;
import com.ikell.solutions.Entities.Company;
import com.ikell.solutions.Utilities.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/companies")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CompanyController {

    @Autowired
    private CompanyBusiness companyBusiness;

    // ================================
    // GET ALL
    // ================================
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @GetMapping
    public ResponseEntity<Map<String, Object>> getAllCompanies() {

        Map<String, Object> response = new HashMap<>();
        List<Company> companies = companyBusiness.findAll();

        response.put("status", HttpStatus.OK.value());
        response.put("data", companies);
        response.put("count", companies.size());

        return ResponseEntity.ok(response);
    }

    // ================================
    // GET BY ID
    // ================================
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<Map<String, Object>> getCompanyById(@PathVariable Long id) {

        Map<String, Object> response = new HashMap<>();
        Company company = companyBusiness.findById(id);

        if (company == null) {
            response.put("message", "Company not found with id: " + id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }

        response.put("data", company);
        return ResponseEntity.ok(response);
    }

    // ================================
    // CREATE
    // ================================
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @PostMapping("/add")
    public ResponseEntity<Map<String, Object>> add(
            @RequestBody Map<String, CompanyDTO> request) {

        Map<String, Object> response = new HashMap<>();

        try {
            // 1️⃣ Validar existencia de data
            CompanyDTO companyDTO = request.get("data");
            if (companyDTO == null) {
                response.put("message", "Request body must contain 'data'");
                return ResponseEntity.badRequest().body(response);
            }

            // 2️⃣ Validaciones de campos mínimos
            if (companyDTO.getName() == null || companyDTO.getName().isBlank()) {
                response.put("message", "Company name is required");
                return ResponseEntity.badRequest().body(response);
            }

            if (companyDTO.getNit() == null || companyDTO.getNit().isBlank()) {
                response.put("message", "Company NIT is required");
                return ResponseEntity.badRequest().body(response);
            }

            if (companyDTO.getEmail() == null || companyDTO.getEmail().isBlank()) {
                response.put("message", "Company email is required");
                return ResponseEntity.badRequest().body(response);
            }

            // 3️⃣ Forzar creación
            companyDTO.setId(0L);

            // 4️⃣ Llamada a negocio
            boolean created = companyBusiness.add(companyDTO);

            if (!created) {
                response.put("message", "Company already exists or validation failed");
                return ResponseEntity.status(HttpStatus.CONFLICT).body(response);
            }

            response.put("message", "Company created successfully");
            response.put("data", companyDTO);

            return ResponseEntity.status(HttpStatus.CREATED).body(response);

        } catch (CustomException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(response);

        } catch (Exception e) {
            response.put("message", "Unexpected error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    // ================================
    // DELETE
    // ================================
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Object>> delete(@PathVariable Long id) {

        Map<String, Object> response = new HashMap<>();

        try {
            companyBusiness.deleteById(id);
            response.put("message", "Company deleted successfully");
            return ResponseEntity.ok(response);

        } catch (Exception e) {
            response.put("message", "Company not found with id: " + id);
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        }
    }
}
