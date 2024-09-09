package com.ikell.solutions.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkerDTO  {

    private Long id;
    private String name;
    private String lastName;  // Cambiado de last_name a lastName
    private String email;
    private String direction;  // Cambiado de Direction a direction
    private Date dateBorn;  // Cambiado de String a LocalDate y renombrado de Date_born a dateBorn
    private Integer identification;  // Cambiado de Identificacion a identification
    private String profession;
    private String specialtyDev;  // Cambiado de Especiality_dev a especialityDev
}
