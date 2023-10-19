package com.sachlevice.api.services.posts;

import com.sachlevice.api.entities.posts.BlogPost;
import com.sachlevice.api.repositories.posts.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogPostService {

    @Autowired
    private BlogPostRepository bPostRepo;

    public BlogPost save(BlogPost bp){
       return bPostRepo.save(bp);
    }

    public List<BlogPost> getAllBlogPosts(){
        return bPostRepo.findAll();
    }

    public BlogPost getBlogPost(String id) {
        return bPostRepo.findById(id).orElse(null);
    }
    public BlogPost updateBlogPost(BlogPost bp){
        return bPostRepo.save(bp);
    }

    public void deleteBlogPost(String id){
        bPostRepo.deleteById(id);
    }
}
