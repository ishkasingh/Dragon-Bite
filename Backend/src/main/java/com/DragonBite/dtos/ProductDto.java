package com.DragonBite.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductDto {
    private long id;
    private String name;
    private String description;
    private double price;
    private String category;
    private int quantity;
    private boolean available;

    private String imageUrl;
//    private String imageType;
//    private byte[] imageData;

}
