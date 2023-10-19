package com.sachlevice.api.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String username;

    private String email;

    private String password;

    private boolean admin;

    private boolean banned;

    public User(int id, String username, String email, String password){
        super();
        this.id = id;
        this.username = username;
        this.email = username;
        this.password = username;
    }

    public User(){
        super();
    }

}
