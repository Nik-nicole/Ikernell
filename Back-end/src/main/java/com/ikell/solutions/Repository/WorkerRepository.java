package com.ikell.solutions.Repository;

import com.ikell.solutions.Entities.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WorkerRepository extends JpaRepository <Worker, Long>{

    boolean existsByEmail(String email);
    boolean existsByIdentification(Integer identification);


}
