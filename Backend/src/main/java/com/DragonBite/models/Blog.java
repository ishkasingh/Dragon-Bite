package com.DragonBite.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
public class Blog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String author;
    private String title;
    private String description;
    private boolean status;
    private String imageName;
    private String imageType;
    @Lob
    private byte[] imageData;

}
