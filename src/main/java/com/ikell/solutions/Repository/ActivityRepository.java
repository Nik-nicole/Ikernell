package com.ikell.solutions.Repository;

import com.ikell.solutions.Entities.Activity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
}
