package com.ikell.solutions.Controllers;

import com.ikell.solutions.Business.ActivityBusiness;
import com.ikell.solutions.DTO.ActivityDTO;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
@CrossOrigin(origins = "*")
public class ActivityController {

    private final ActivityBusiness activityBusiness;

    public ActivityController(ActivityBusiness activityBusiness) {
        this.activityBusiness = activityBusiness;
    }

    // ===================== GET ALL =====================
    @GetMapping
    public ResponseEntity<List<ActivityDTO>> getAllActivities() {
        List<ActivityDTO> activities = activityBusiness.findAll();
        return ResponseEntity.ok(activities);
    }

    // ===================== GET BY ID =====================
    @GetMapping("/{id}")
    public ResponseEntity<ActivityDTO> getActivityById(@PathVariable Long id) {
        ActivityDTO activity = activityBusiness.findById(id);
        return ResponseEntity.ok(activity);
    }

    // ===================== CREATE =====================
    @PostMapping("/add")
    public ResponseEntity<ActivityDTO> createActivity(
            @Valid @RequestBody ActivityDTO activityDTO) {

        ActivityDTO createdActivity = activityBusiness.save(activityDTO);
        return new ResponseEntity<>(createdActivity, HttpStatus.CREATED);
    }

    // ===================== DELETE =====================
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteActivity(@PathVariable Long id) {
        activityBusiness.delete(id);
        return ResponseEntity.noContent().build();
    }


}
