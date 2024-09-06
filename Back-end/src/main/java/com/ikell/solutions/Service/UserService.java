package com.ikell.solutions.Service;

import com.fasterxml.jackson.core.PrettyPrinter;
import com.ikell.solutions.Entities.User;
import com.ikell.solutions.Repository.UserRepository;
import com.ikell.solutions.Service.dao.Idao;
import jakarta.servlet.http.PushBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements Idao<User, Long> {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User>findAll(){return this.userRepository.findAll();}

    @Override
    public User getById(Long aLong){return this.userRepository.getReferenceById(aLong);}

    @Override
    public void save(User object){ this.userRepository.save(object);}

    @Override
    public void  delete(Long id){}

}
