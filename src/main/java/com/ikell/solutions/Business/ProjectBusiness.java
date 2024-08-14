package com.ikell.solutions.Business;


import com.ikell.solutions.DTO.ProjectDTO;
import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Repository.ProjectRepository;
import com.ikell.solutions.Service.ProjectService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class ProjectBusiness {

    @Autowired
    private ProjectService projectService;

    private ModelMapper modelMapper=new ModelMapper();

    public List<Project> findAll(){
        return this.projectService.findAll();
    }

    public Project findById(Long id){
        return this.projectService.getById(id);
    }
    public boolean add (ProjectDTO projectDTO){
      try{
          Project project=modelMapper.map(projectDTO,Project.class);
          this.projectService.save(project);
          return Boolean.TRUE;
      }catch (Exception e){
          return Boolean.FALSE;
      }


    }


}
