package com.sachlevice.api.controller;

import com.sachlevice.api.entities.posts.BlogPost;
import com.sachlevice.api.repositories.posts.BlogPostRepository;
import com.sachlevice.api.services.posts.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;

@CrossOrigin
@RestController
public class CreatePostController {

    @Autowired
    private BlogPostRepository bPostRepo;

    @RequestMapping("/post-create")
    public ResponseEntity<BlogPost> createPost(@RequestBody BlogPost post) {
        // Get the form data
        LocalDateTime timestamp = LocalDateTime.now();;
        post.setTimestamp(timestamp);

        bPostRepo.save(post);


        return ResponseEntity.ok(post);
    }

    @GetMapping("/get-all-blog-posts")
    public List<BlogPost> getAllPosts(){
        //figure proper sorting later
        List<BlogPost> blogPosts = bPostRepo.findAll();
        Collections.reverse(blogPosts);
        return blogPosts;
    }

    @GetMapping("/get-post")
    public BlogPost getBlogPost(@RequestParam("id") String blogPostId) {
        // Get the blog post with the specified ID.

        // Return the blog post.
        return bPostRepo.findById(blogPostId).orElse(null);
    }
}
