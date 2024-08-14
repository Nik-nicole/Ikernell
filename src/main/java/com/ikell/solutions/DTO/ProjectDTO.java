package com.ikell.solutions.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectDTO {

    private Long id;
    private String name;
    private String Description;
    private Date date_start;
    private Date date_end;
    private String state;
}
