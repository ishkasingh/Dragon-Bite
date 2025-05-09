package com.DragonBite.dtos;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GetProductDto {
    private String name;
    private String description;
    private double price;

    private String category;
    private int quantity;
    private boolean available;

        private String imageName;
      private String imageType;
      private byte[] imageData;

}
