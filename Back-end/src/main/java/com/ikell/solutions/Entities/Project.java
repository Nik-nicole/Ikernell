package com.ikell.solutions.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="Project")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(exclude = {"id_workerList", "company", "activityList", "bugsList"})
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column(nullable = false)
    private String Description;

    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date date_start;

    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date date_end;

    @Column
    private String state;

    @ManyToOne
    @JoinColumn(name = "company_id", referencedColumnName = "id")
    @JsonBackReference
    private Company company;

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
