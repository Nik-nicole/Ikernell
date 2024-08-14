package com.ikell.solutions.Entities;


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

    @Column(nullable = false)
    private Enum<states_A> state_A;

    @ManyToOne
    @JoinColumn(name = "fk_project_id_Activity")
    private Project project;

}
