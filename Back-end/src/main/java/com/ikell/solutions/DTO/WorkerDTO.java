package com.ikell.solutions.DTO;

import com.ikell.solutions.Entities.Worker;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WorkerDTO  {

    private Long id;
    private String name;
    private String last_name;
    private String email;
    private String Direction;
    private String Date_born;
    private String profesion;
    private String Especiality_dev;
    private String password;
    private Integer Identificacion;

}
