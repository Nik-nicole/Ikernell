package com.ikell.solutions.Service;

import com.ikell.solutions.Entities.Bugs;
import com.ikell.solutions.Repository.BugsRepository;
import com.ikell.solutions.Service.dao.Idao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BugsService implements Idao<Bugs, Long> {

    @Autowired
    private BugsRepository bugsRepository;

    @Override
    public List<Bugs> findAll(){ return this.bugsRepository.findAll(); }

    @Override
    public Bugs getById(Long aLong){ return this.bugsRepository.getReferenceById(aLong); }

    @Override
    public void save(Bugs object){this.bugsRepository.save(object); }

    @Override
    public void delete(Bugs object){this.bugsRepository.delete(object);
    }
}
