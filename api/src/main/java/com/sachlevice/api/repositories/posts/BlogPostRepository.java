package com.sachlevice.api.repositories.posts;

import com.sachlevice.api.entities.posts.BlogPost;

import org.springframework.data.mongodb.repository.MongoRepository;

import org.springframework.stereotype.Repository;


@Repository
public interface BlogPostRepository extends MongoRepository<BlogPost,String> {

}


