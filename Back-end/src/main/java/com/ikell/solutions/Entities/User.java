    package com.ikell.solutions.Entities;

    import com.fasterxml.jackson.annotation.JsonBackReference;
    import jakarta.persistence.*;
    import lombok.AllArgsConstructor;
    import lombok.Getter;
    import lombok.NoArgsConstructor;
    import lombok.Setter;

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

        @Enumerated(EnumType.STRING)
        @Column(nullable = false)
        private Role role;


        @ManyToOne
        @JoinColumn(name = "company_id", referencedColumnName = "id")
        @JsonBackReference
        private Company company;

        @OneToOne
        @JoinColumn(name = "worker_id", referencedColumnName = "id")
        @JsonBackReference
        private Worker worker;

    }
