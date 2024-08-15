package com.ikell.solutions.Service;

import com.ikell.solutions.Entities.Bugs;
import com.ikell.solutions.Repository.BugsRepository;
import com.ikell.solutions.Service.dao.Idao;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BugsService implements Idao<Bugs, Long> {

    @Autowired
    private BugsRepository bugsRepository;

    @Override
    private List<Bugs> findAll

}
