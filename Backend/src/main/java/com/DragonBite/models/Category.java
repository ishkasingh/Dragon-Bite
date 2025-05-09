package com.DragonBite.models;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Category  extends BaseModel{

    String name;
}
