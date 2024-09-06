package com.ikell.solutions.Service;

import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Repository.ProjectRepository;
import com.ikell.solutions.Repository.WorkerRepository;
import com.ikell.solutions.Service.dao.Idao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService  implements Idao<Project, Long> {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public List<Project> findAll() {
        return this.projectRepository.findAll();
    }

    @Override
    public Project getById(Long aLong) {
        return this.projectRepository.getReferenceById(aLong);
    }

    @Override
    public void save(Project object) {this.projectRepository.save(object);}

    @Override
    public void delete(Long id) {
        Project project=this.projectRepository.getById(id);
        if(project !=null){
            this.projectRepository.delete(project);
        }
    }
}
