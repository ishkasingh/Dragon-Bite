package com.DragonBite.controllers;


import com.DragonBite.Exceptions.ProductNotFoundException;
import com.DragonBite.models.Blog;
import com.DragonBite.services.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/blog")
public class BlogController {

    @Autowired
    private BlogService blogService;

    @PostMapping()
    public ResponseEntity<?> addBlog(@RequestPart Blog blog,
                                     @RequestPart MultipartFile imageFile) throws IOException {
        return new ResponseEntity<>(blogService.addBlog(blog,imageFile), HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity<?> showAllBlog(){

        return new ResponseEntity<>(blogService.showAllBlog(),HttpStatus.OK);

    }

    @GetMapping("/{blogId}/image")
    public ResponseEntity<byte[]> getImageByProductId(@PathVariable long blogId) throws ProductNotFoundException {

        Blog blog = blogService.ImageData(blogId);
        byte [] imageFile=blog.getImageData();


        return ResponseEntity.ok().contentType(MediaType.valueOf(blog.getImageType())).body(imageFile);

    }
}


//public ResponseEntity<?> addBlog(@RequestPart Blog blog, @RequestPart(value = "file", required = false) MultipartFile file) throws IOException
