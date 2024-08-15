package com.ikell.solutions.Service;

import com.ikell.solutions.DTO.ActivityDTO;
import com.ikell.solutions.Entities.Activity;
import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Repository.ActivityRepository;
import com.ikell.solutions.Repository.ProjectRepository;
import com.ikell.solutions.Service.dao.Idao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService implements Idao<Activity, Long>{

    @Autowired
    private ActivityRepository activityRepository;

    @Override
    public List<Activity> findAll() {
        return this.activityRepository.findAll();
    }

    @Override
    public Activity getById(Long aLong) {
        return this.activityRepository.getReferenceById(aLong);
    }

    @Override
    public Activity save(Activity object){
        return this.activityRepository.save(object);
    }


    @Override
    public void delete(Long id) {
        Activity activity=this.activityRepository.getById(id);
        if(activity !=null){
            this.activityRepository.delete(activity);
        }
    }
}
