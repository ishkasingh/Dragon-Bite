package com.DragonBite.controllers;


import com.DragonBite.Exceptions.ProductNotFoundException;
import com.DragonBite.dtos.ProductDto;
import com.DragonBite.models.Products;
import com.DragonBite.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/product")
@CrossOrigin
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService=productService;
    }

    @GetMapping()
    public ResponseEntity<?>getAllProducts(){
        return new ResponseEntity<>(productService.getAllProducts(),HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ProductDto getSingleProduct(@PathVariable("id") long id) throws ProductNotFoundException {

                return productService.getSingleProduct(id);
    }

    @GetMapping("/{productId}/image")
    public ResponseEntity<byte[]> getImageByProductId(@PathVariable long productId) throws ProductNotFoundException {

      Products product = productService.ImageData(productId);
      byte [] imageFile=product.getImageData();


        return ResponseEntity.ok().contentType(MediaType.valueOf(product.getImageType())).body(imageFile);

    }





}
