package com.ikell.solutions.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProjectResponseDTO {

    public Long id;
    public String name;
    public String description;
    public String state;
    public List<Long> workerIds;
}
