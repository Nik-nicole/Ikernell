package com.ikell.solutions.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkerDTO  {

    private Long id;
    private String name;
    private String lastName;
    private String email;
    private String direction;
    private Date dateBorn;
    private Integer identification;
    private String profession;
    private String specialtyDev;
    private Long companyId;
    private List<Long> projectIds;
}
