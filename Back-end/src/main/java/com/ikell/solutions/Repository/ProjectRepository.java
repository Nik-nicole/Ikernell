package com.ikell.solutions.Repository;


import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Entities.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    @Query("SELECT p FROM Project p WHERE p.company.id = :companyId")
    List<Project> findByCompanyId(@Param("companyId") Long companyId);

    @Query("SELECT p FROM Project p JOIN p.id_workerList w WHERE w.id = :workerId")
    List<Project> findByWorkerId(@Param("workerId") Long workerId);
}
