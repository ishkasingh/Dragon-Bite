package com.DragonBite.services;

import com.DragonBite.models.Blog;
import com.DragonBite.repositories.BlogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class BlogService {

    @Autowired
    private BlogRepo blogRepo;


    public Object addBlog(Blog blogData, MultipartFile file) throws IOException {
        blogData.setImageData(file.getBytes());
        blogData.setImageName(file.getName());
        blogData.setImageType(file.getContentType());

        blogRepo.save(blogData);
        return "Blog is added Successfully. Waiting for admin to confirm";

    }

    public Object showAllBlog() {

        List<Blog> blogs=blogRepo.findAll();

        for(Blog blog:blogs){
            blog.setImageData(null);
        }
        return blogs;
    }

    public Blog ImageData(long blogId) {
        Optional<Blog> blogOptional=blogRepo.findById(blogId);

        if(blogOptional.isEmpty()){
            throw  new RuntimeException("Blog not avialable");

        }

        return blogOptional.get();
    }

    public Object updateStatus(long id) {
        Optional<Blog> optionalBlog=blogRepo.findById(id);

        if(optionalBlog.isEmpty())throw new RuntimeException("Blog not exist");
        Blog blog=optionalBlog.get();

        blog.setStatus(true);

        blog= blogRepo.save(blog);

        blog.setImageData(null);
         return blog;

    }

    public void deleteBlog(long id) {

        blogRepo.deleteById(id);
    }
}
