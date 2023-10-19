package com.sachlevice.api.repositories;

import com.sachlevice.api.entities.User;
import jakarta.persistence.EntityManager;
import org.springframework.data.repository.RepositoryDefinition;

import java.util.List;

/*@RepositoryDefinition(domainClass = User.class, idClass = Integer.class)*/
public interface UserRepositoryCustom {
    User findByUsername(String userName);
    User findByEmail(String email);
    User findByEmailAndPassword(String email,String password);
}
