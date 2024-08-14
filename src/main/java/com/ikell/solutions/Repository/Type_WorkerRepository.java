package com.ikell.solutions.Repository;


import com.ikell.solutions.Entities.Type_Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Type_WorkerRepository extends JpaRepository<Type_Worker, Long> {


}
