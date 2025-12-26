package com.ikell.solutions.Business;

import com.ikell.solutions.DTO.ActivityDTO;
import com.ikell.solutions.DTO.ProjectDTO;
import com.ikell.solutions.Entities.Activity;
import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Service.ActivityService;
import com.ikell.solutions.Service.ProjectService;
import org.aspectj.apache.bcel.generic.RET;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ActivityBusiness  {

    private final ActivityService activityService;
    private final ModelMapper modelMapper;
    private ProjectService projectService;


    public ActivityBusiness(ActivityService activityService, ModelMapper modelMapper,
                             ProjectService projectService) {
        this.activityService = activityService;
        this.modelMapper = modelMapper;
        this.projectService = projectService;
    }

    // GET ALL
    public List<ActivityDTO> findAll(){
         return activityService.findAll()
                 .stream()
                 .map(activity -> modelMapper.map(activity, ActivityDTO.class))
                 .collect(Collectors.toList());
    }

    //GET BY ID
    public ActivityDTO findById(Long id ){
        Activity activity = activityService.getById(id);

        if (activity == null){
            throw  new RuntimeException("Activity not found with id:" +id);
        }
        return modelMapper.map(activity, ActivityDTO.class);
    }

    //CREATE
    public ActivityDTO save(ActivityDTO activityDTO){
        Project project = projectService.getById(activityDTO.getProjectId());

        if (project == null ){
            throw new IllegalArgumentException(
                    "project not found with id: " + activityDTO.getProjectId()
            );
        }


        Activity activity = modelMapper.map(activityDTO, Activity.class);
        Activity savedActivity = activityService.save(activity);

        return modelMapper.map(savedActivity, ActivityDTO.class);

    }

    public void delete(Long id) {
        Activity activity = activityService.getById(id);

        if (activity == null) {
            throw new RuntimeException("Activity not found with id: " + id);
        }

        // 🔹 Ejemplo de regla de negocio:
        // if (activity.isCompleted()) {
        //     throw new RuntimeException("Completed activities cannot be deleted");
        // }

        activityService.delete(activity);
    }

}
