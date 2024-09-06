package com.ikell.solutions.Entities;


import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name="Worker")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"idf_typeWorkers","id_projectList"})
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String  direction;

    @Column(nullable = false, unique = true)
    private Date dateBorn;

    @Column(nullable = false, unique = true)
    private  Integer identificacion;

    @Column(nullable = false)
    private  String profesion;

    @Column(nullable = false)
    private String especialityDev;

    @ManyToMany
    @JoinTable(name="WorkersDetail",
              joinColumns=@JoinColumn(name="fk_id_Type_worke"),
              inverseJoinColumns = @JoinColumn(name = "fk_id_worked"))
    private List<Type_Worker> idf_typeWorkers;

    @ManyToMany(mappedBy = "id_workerList",fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private List<Project> id_projectList;

    @OneToOne(mappedBy = "worker")
    private User user;

}
