package com.ikell.solutions.Entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.type.descriptor.jdbc.VarcharJdbcType;

import java.util.Date;

@Entity
@Table(name="Trabajadores")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Trabajador {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String last_name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, unique = true)
    private String  Direction;

    @Column(nullable = false, unique = true)
    private Date date_born;

    @Column(nullable = false, unique = true)
    private  Integer Identificacion;

    @Column(nullable = false)
    private  String profesion;

    @Column(nullable = false)
    private String Especiality_dev;

    @Column(nullable = false)
    private String password;


}
