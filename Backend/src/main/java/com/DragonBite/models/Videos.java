package com.DragonBite.models;


import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
public class Videos extends BaseModel {


    private String title;
    private String description;
    private String videoUrl;
    private Date   date;
}
