package com.ikell.solutions.Business;

import com.ikell.solutions.DTO.BugsDTO;
import com.ikell.solutions.Entities.Bugs;
import com.ikell.solutions.Service.BugsService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class BugsBusiness {

    @Autowired
    private BugsService bugsService;

    private ModelMapper modelMapper = new ModelMapper();

    public List<Bugs> findAll(){ return bugsService.findAll(); }

    public Bugs findById(Long id ){ return  this.bugsService.getById(id);}

    public Boolean add(BugsDTO bugsDTO){
        try{
            Bugs bugs=modelMapper.map(bugsDTO,Bugs.class);
            this.bugsService.save(bugs);
            return Boolean.TRUE;
        }catch (RuntimeException e){
            throw  new RuntimeException(e);
        }
    }

    public Boolean delete(Long id){
        try{
            Bugs bugs = bugsService.getById(id);
            bugsService.delete(bugs);
            return true;
        }catch (RuntimeException e){
            throw new RuntimeException(e);
        }
    }
}
