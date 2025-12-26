package com.ikell.solutions.Business;

import com.ikell.solutions.DTO.ProjectDTO;
import com.ikell.solutions.DTO.ProjectResponseDTO;
import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Entities.Worker;
import com.ikell.solutions.Service.ProjectService;
import com.ikell.solutions.Service.WorkerService;
import com.ikell.solutions.Utilities.CustomException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Component
@Transactional
public class ProjectBusiness {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private WorkerService workerService;

    @Autowired
    private ModelMapper modelMapper;

    // ================= READ =================
    public List<Project> findAll() {
        return projectService.findAll();
    }

    public Project findById(Long id) {
        Project project = projectService.getById(id);
        if (project == null) {
            throw new CustomException("Project not found with id: " + id);
        }
        return project;
    }


    // ================= CREATE =================
    public Project add(ProjectDTO dto) {

        Project project = modelMapper.map(dto, Project.class);

        // ✅ lista mutable
        project.setId_workerList(new ArrayList<>());

        projectService.save(project);

        if (dto.getWorkerIds() != null && !dto.getWorkerIds().isEmpty()) {
            updateWorkers(project.getId(), dto.getWorkerIds());
        }

        return project;
    }

    // ================= UPDATE =================
    public Project update(ProjectDTO dto) {

        if (dto.getId() == null) {
            throw new CustomException("Project ID is required");
        }

        Project project = findById(dto.getId());

        project.setName(dto.getName());
        project.setDescription(dto.getDescription());
        project.setDate_start(dto.getDate_start());
        project.setDate_end(dto.getDate_end());
        project.setState(dto.getState());

        projectService.save(project);

        if (dto.getWorkerIds() != null) {
            updateWorkers(project.getId(), dto.getWorkerIds());
        }

        return project;
    }

    // ================= UPDATE WORKERS =================
    public void updateWorkers(Long projectId, List<Long> workerIds) {

        Project project = findById(projectId);

        // 🔥 LIMPIAR RELACIONES
        for (Worker worker : project.getId_workerList()) {
            worker.getId_projectList().remove(project);
        }
        project.getId_workerList().clear();

        // 🔥 ASIGNAR NUEVOS
        for (Long workerId : workerIds) {

            Worker worker = workerService.getById(workerId);
            if (worker == null) {
                throw new CustomException("Worker not found with id: " + workerId);
            }

            if (!project.getId_workerList().contains(worker)) {
                project.getId_workerList().add(worker);
            }

            if (!worker.getId_projectList().contains(project)) {
                worker.getId_projectList().add(project);
            }
        }



        projectService.save(project);
    }

    // ================= DELETE =================
    public void delete(Long id) {

        Project project = findById(id);

        for (Worker worker : project.getId_workerList()) {
            worker.getId_projectList().remove(project);
        }

        projectService.delete(project);
    }


    public ProjectResponseDTO toResponse(Project project) {

        ProjectResponseDTO dto = new ProjectResponseDTO();
        dto.id = project.getId();
        dto.name = project.getName();
        dto.description = project.getDescription();
        dto.state = project.getState();

        dto.workerIds = project.getId_workerList()
                .stream()
                .map(w -> w.getId())
                .toList();

        return dto;
    }

}
