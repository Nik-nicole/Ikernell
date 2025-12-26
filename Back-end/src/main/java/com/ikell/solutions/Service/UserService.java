package com.ikell.solutions.Service;

import com.ikell.solutions.Entities.User;
import com.ikell.solutions.Repository.UserRepository;
import com.ikell.solutions.Service.dao.Idao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements Idao<User, Long> {

    @Autowired
    private UserRepository userRepository;

    public User findByWorkerEmail(String email) {
        return userRepository.findByWorkerEmail(email);
    }

    @Override
    public List<User>findAll(){return this.userRepository.findAll();}

    @Override
    public User getById(Long aLong){return this.userRepository.getReferenceById(aLong);}

    @Override
    public User save(User object){ return userRepository.save(object);}

    @Override
    public void delete(User object){this.userRepository.delete(object);}

}
