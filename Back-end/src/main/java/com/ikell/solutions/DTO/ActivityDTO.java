package com.ikell.solutions.DTO;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActivityDTO {
    private Long id;
    private String description;
    private String name;
    private Date date_limit;
    private String state_A;

    @NotNull(message = "projectID is required")
    private Long projectId;
}
