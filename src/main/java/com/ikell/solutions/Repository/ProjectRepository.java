package com.ikell.solutions.Repository;


import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Entities.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

}
