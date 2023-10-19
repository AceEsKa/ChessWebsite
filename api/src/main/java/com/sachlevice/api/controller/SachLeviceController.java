package com.sachlevice.api.controller;



import com.sachlevice.api.JwtUtils;
import com.sachlevice.api.entities.User;
import com.sachlevice.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class SachLeviceController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @RequestMapping("/register-user")
    public ResponseEntity<Object> registerUser(@RequestBody User user){
        if(userService.getUserByUserName(user.getUsername())!=null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username in use");
        }else if(userService.getUserByEmail(user.getEmail())!=null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email adress alredy in use");
        }
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        try {
            userService.save(user);
            return ResponseEntity.ok(user);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Something went wrong");
        }
    }


    @RequestMapping("/login-user")
    /*@PreAuthorize("permitAll()")*/
    public ResponseEntity<Object> loginUser(@RequestBody User user){
        User toVerifyAgainst = userService.getUserByUserName(user.getUsername());
        if(toVerifyAgainst==null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Incorrect username or password");
        }
        String sentPassword = bCryptPasswordEncoder.encode(user.getPassword());
        String userPassword = toVerifyAgainst.getPassword();
        if(bCryptPasswordEncoder.matches(user.getPassword(),userPassword)){
            boolean admin = toVerifyAgainst.isAdmin();
            String token =JwtUtils.generateToken(user.getUsername(),admin);
            return ResponseEntity.ok(token);
        }else{
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Incorrect username or password");
        }
    }

    @RequestMapping("/ban-user")
    public ResponseEntity<User> banUser(@RequestBody User user){
        User toBan = userService.getUserByUserName(user.getUsername());
        toBan.setBanned(true);
        userService.save(toBan);
        return ResponseEntity.ok(user);
    }

    @RequestMapping("/change-user-password")
    public ResponseEntity<Object> changePassword(@RequestBody User user){
        User toUpdate = userService.getUserByUserName(user.getUsername());
        toUpdate.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userService.save(toUpdate);
        return ResponseEntity.ok(user);
    }

    @RequestMapping("/change-user-email")
    public ResponseEntity<Object> changeEmail(@RequestBody User user){
        User toUpdate = userService.getUserByUserName(user.getUsername());
        toUpdate.setEmail(bCryptPasswordEncoder.encode(user.getEmail()));
        userService.save(toUpdate);
        return ResponseEntity.ok(user);
    }

    //TO IMPLEMENT
    @RequestMapping("/forgot-password-user")
    public ResponseEntity<Object> ForgotPassword(@RequestBody User user){
        return ResponseEntity.ok(user);
    }

    /*@RequestMapping("")*/
}
