package com.ikell.solutions.Entities;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.persister.collection.mutation.UpdateRowsCoordinator;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="Project")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"id_workerList"})
public class Project {


    enum states{
        ACTIVO,INACTIVO,EJECUCION
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String Description;

    @Column(nullable = false)
    private Date date_start;

    @Column(nullable = false)
    private Date date_end;

    @Column(nullable = false)
    private Enum<states> state;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinTable(name = "projec_workeds",
       joinColumns = @JoinColumn(name = "fk_id_project"),
      inverseJoinColumns = @JoinColumn(name = "fk_id_worked"))
    private List<Worker> id_workerList;


    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<Activity> activityList = new ArrayList<>();

    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private  List<Bugs>  bugsList = new ArrayList<>();




}
