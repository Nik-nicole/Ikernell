package com.ikell.solutions.Entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Bugs")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Bugs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String description;

    @Column
    private boolean state;

    @ManyToOne
    @JoinColumn(name= "fk_project_id_Bugs")
    private Project project;

}

