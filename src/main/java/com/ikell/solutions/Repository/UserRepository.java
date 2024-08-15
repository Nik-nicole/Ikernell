package com.ikell.solutions.Repository;

import com.ikell.solutions.Entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
