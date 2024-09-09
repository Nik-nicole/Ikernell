package com.ikell.solutions.DTO;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private Long id;
    private String password;
    @JsonIgnoreProperties({"name", "lastName","email","direction","dateBorn","identification","profession","specialtyDev"})
    private WorkerDTO workerDTO;
}
