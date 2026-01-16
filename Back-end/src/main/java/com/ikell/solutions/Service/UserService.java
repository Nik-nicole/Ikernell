package com.ikell.solutions.Service;

import com.ikell.solutions.Entities.User;
import com.ikell.solutions.Repository.UserRepository;
import com.ikell.solutions.Service.dao.Idao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.Optional;

@Service
public class UserService implements Idao<User, Long> {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public Optional<User> findByWorkerEmail(String email) {
        return userRepository.findByWorkerEmail(email);
    }


    @Override
    public List<User>findAll(){return this.userRepository.findAll();}

    @Override
    public User getById(Long aLong){return this.userRepository.getReferenceById(aLong);}


    @Override
    public User save(User user) {

        // 🔐 SOLO si NO está encriptada
        if (!user.getPassword().startsWith("$2a$")) {
            user.setPassword(
                    passwordEncoder.encode(user.getPassword())
            );
        }

        return userRepository.save(user);
    }


    @Override
    public void delete(User object){this.userRepository.delete(object);}

}
