package com.ikell.solutions.Repository;

import com.ikell.solutions.Entities.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WorkerRepository extends JpaRepository <Worker, Long>{

    boolean existsByEmail(String email);
    boolean existsByIdentification(Integer identification);

}
