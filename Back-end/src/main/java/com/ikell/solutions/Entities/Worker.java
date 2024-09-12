package com.ikell.solutions.Entities;


import com.fasterxml.jackson.annotation.JsonManagedReference;
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

    @Column(nullable = false)
    private Date dateBorn;

    @Column(nullable = false, unique = true)
    private  Integer identification;

    @Column(nullable = false)
    private  String profession;

    @Column(nullable = false)
    private String specialtyDev;

    @ManyToMany(fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
    @JoinTable(name="WorkersDetail",
              joinColumns=@JoinColumn(name="fk_id_Type_worker"),
              inverseJoinColumns = @JoinColumn(name = "fk_id_worked"))
    private List<Type_Worker> idf_typeWorkers;

    @ManyToMany(mappedBy = "id_workerList",fetch = FetchType.LAZY,cascade = CascadeType.PERSIST)
    private List<Project> id_projectList;

    @OneToOne(mappedBy = "worker", cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JsonManagedReference
    private User user;

}
