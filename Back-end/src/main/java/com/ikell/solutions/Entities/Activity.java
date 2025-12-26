package com.ikell.solutions.Entities;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="Activity")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Activity {
    enum states_A{
        PENDIENTE,PROGRESO,COMPLETADA
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Date date_limit;

    @Enumerated(EnumType.STRING)
    private states_A state_A;


    @ManyToOne(optional = false)
    @JoinColumn(name = "fk_project_id_Activity")
    @JsonBackReference
    private Project project;

}
