package com.ikell.solutions.Controllers;


import com.ikell.solutions.Business.ProjectBusiness;
import com.ikell.solutions.Entities.Project;
import com.ikell.solutions.Entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/project")
public class ProjectController {

    @Autowired
    private ProjectBusiness projectBusiness;

    

    }
}

