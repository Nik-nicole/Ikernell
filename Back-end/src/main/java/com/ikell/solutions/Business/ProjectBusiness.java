package com.ikell.solutions.Business;


import com.ikell.solutions.DTO.ProjectDTO;
import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Repository.ProjectRepository;
import com.ikell.solutions.Service.ProjectService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
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

    public Boolean add (ProjectDTO projectDTO){
      try{
          Project project=modelMapper.map(projectDTO,Project.class);
          projectService.save(project);
          return true;
      }catch (Exception e){
          e.printStackTrace(); // Registra el error para depuración
          return false;
      }
    }

    public Boolean update(ProjectDTO projectDTO){
        try{
            Project project=modelMapper.map(projectDTO,Project.class);
            projectService.save(project);
            return true;
        }catch (Exception e){
            e.printStackTrace();
            return false;
        }
    }

    public Boolean delete(ProjectDTO projectDTO){
        try{
            Project project=modelMapper.map(projectDTO,Project.class);
            this.projectService.delete(project.getId());
            return Boolean.TRUE;
        }catch (Exception e){
            return Boolean.FALSE;
        }

    }





}
