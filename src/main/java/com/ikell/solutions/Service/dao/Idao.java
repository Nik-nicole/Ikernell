package com.ikell.solutions.Service.dao;

import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Entities.Worker;

import java.util.List;

public interface Idao <T, ID> {

    public List<T> findAll();

    public T getById(ID id);

    public T save (T object);

    public void delete ( Long id);


}
