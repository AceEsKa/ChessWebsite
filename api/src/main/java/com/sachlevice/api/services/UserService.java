package com.sachlevice.api.services;

import com.sachlevice.api.entities.User;
import com.sachlevice.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class UserService {


    @Autowired
    private UserRepository userRepo;

    /*@Autowired
    private final EntityManagerFactory entityManagerFactory;

    public UserService(EntityManagerFactory entityManagerFactory) {
        this.entityManagerFactory = entityManagerFactory;
    }*/
 /*   private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
*/

    public User save(User user){
        return userRepo.save(user);
    }

/*
    public User update(User user) {return userRepo.update(user);}

    public void delete(User user){userRepo.delete(user);}

    public List<User> getAllUsers(){
        return userRepo.findAll();
    }
*/

    public User getUserByUserName(String userName){ return userRepo.findByUsername(userName);}

    public User getUserByEmail(String email){return userRepo.findByEmail(email);}

    public User getUserByEmailAndPassword(String email,String password){return userRepo.findByEmailAndPassword(email, password);}
}
