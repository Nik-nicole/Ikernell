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

import java.util.List;

public class ActivityBusiness  {

    @Autowired
    private ActivityService activityService;

    private ModelMapper modelMapper=new ModelMapper();

    public List<Activity> findAll(){
        return  this.activityService.findAll();
    }

    public Activity findById(Long id){
        return  this.activityService.getById(id);
    }

    public Boolean add(ActivityDTO activityDTO){
        try{
            Activity activity=modelMapper.map(activityDTO,Activity.class);
            this.activityService.save(activity);
            return Boolean.TRUE;
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }
    public Boolean delete(Long id) {
        try {
            Activity activity = activityService.getById(id);
            this.activityService.delete(activity);
            return true;
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }
}
