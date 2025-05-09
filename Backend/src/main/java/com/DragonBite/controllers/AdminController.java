package com.DragonBite.controllers;

import com.DragonBite.dtos.ProductDto;
import com.DragonBite.models.Videos;
import com.DragonBite.services.BlogService;
import com.DragonBite.services.ProductService;
import com.DragonBite.services.VideosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin
public class AdminController {

    private ProductService productService;
    private VideosService videosService;
    private BlogService blogService;

    @Autowired
    public AdminController(ProductService productService,
                           VideosService videosService,
                            BlogService blogService){
        this.productService=productService;
        this.videosService=videosService;
        this.blogService=blogService;
    }
    @PostMapping()
    public ResponseEntity<?> addProduct(@RequestPart("productDto") ProductDto productDto, @RequestPart() MultipartFile imageFile)
                                                                        throws IOException    {

            return new ResponseEntity<>(productService.addProduct(productDto, imageFile), HttpStatus.OK);


    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@PathVariable Long id,@RequestPart("productDto") ProductDto productDto,
                                           @RequestPart() MultipartFile imageFile)
                                            throws IOException    {
        return  new ResponseEntity<>(productService.updateproduct(id,productDto,imageFile),HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id){
        productService.delete(id);
       return new ResponseEntity<>(HttpStatus.OK);

    }

    @PostMapping("/video")
    public ResponseEntity<?> addVideo(@RequestBody Videos videos){
        return new ResponseEntity<>(videosService.addVideo(videos),HttpStatus.OK);
    }

    @DeleteMapping("/video/{id}")
    public ResponseEntity<?> delete(@PathVariable long id){
        return new ResponseEntity<>(videosService.delete(id),HttpStatus.OK);
    }

    @PutMapping("/blog/{id}")
    public ResponseEntity<?> updateStaus(@PathVariable long id){
        return new ResponseEntity<>(blogService.updateStatus(id),HttpStatus.OK);
    }

    @DeleteMapping("/blog/{id}")
    public void deleteBlog(@PathVariable long id){
        blogService.deleteBlog(id);

    }
}
