package com.ikell.solutions.Repository;

import com.ikell.solutions.Entities.Bugs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BugsRepository extends JpaRepository<Bugs, Long> {
}
