package com.ikell.solutions.Entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.TypeBinderType;

@Entity
@Getter
@Setter
@Table(name="users")
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column (nullable = false)
    private String password;

    @OneToOne
    @JoinColumn(name = "worker_id", referencedColumnName = "id")
    private  Worker worker;


}
