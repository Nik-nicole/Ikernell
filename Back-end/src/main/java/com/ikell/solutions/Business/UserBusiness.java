package com.ikell.solutions.Business;


import com.ikell.solutions.DTO.UserDTO;
import com.ikell.solutions.Entities.User;
import com.ikell.solutions.Repository.UserRepository;
import com.ikell.solutions.Service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserBusiness {

    @Autowired
    private UserService userService;
    private ModelMapper modelMapper=new ModelMapper();


    public List<User>findAll(){return  this.userService.findAll();}

    public User finById(Long id){return this.userService.getById(id);}

    public Boolean add(UserDTO userDTO) {
        try{
            User user=modelMapper.map(userDTO,User.class);
            userService.save(user);
            return Boolean.TRUE;
        }catch (Exception e){
            return  Boolean.FALSE;
        }
    }
    public Boolean delete(Long id) {
        try {
            User user = userService.getById(id);
            userService.delete(user);
            return true;
        } catch (RuntimeException e) {
            throw new RuntimeException(e);
        }
    }



}
