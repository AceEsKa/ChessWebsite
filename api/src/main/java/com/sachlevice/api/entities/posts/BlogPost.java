package com.sachlevice.api.entities.posts;

import lombok.Getter;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Document("BlogPosts")
public class BlogPost {

    @Getter
    @Id
    public String _id;
    private String title;
    private String summary;
    private String content;
    private LocalDateTime timestamp;
    private Object file;

    public BlogPost(String title, String summary, String content,LocalDateTime timestamp, Object file){
        super();
        this.timestamp = timestamp;
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.file = file;
    }

    public BlogPost(){
        super();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public Object getFile() {
        return file;
    }

    public void setImage(Object file) {
        this.file = file;
    }


}
