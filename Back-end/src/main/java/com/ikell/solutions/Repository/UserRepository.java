package com.ikell.solutions.Repository;

import com.ikell.solutions.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    @Query("SELECT u FROM User u WHERE u.worker.email = :email")
    User findByWorkerEmail(@Param("email") String email);
}
