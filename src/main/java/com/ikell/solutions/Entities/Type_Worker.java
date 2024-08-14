package com.ikell.solutions.Entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name="Type_Worker")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class Type_Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @ManyToMany(mappedBy = "idf_typeWorkers",fetch = FetchType.LAZY,cascade = {CascadeType.ALL})
    private List<Worker> idf_workers;
}
