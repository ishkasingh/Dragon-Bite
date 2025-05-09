package com.DragonBite.repositories;

import com.DragonBite.models.Products;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepo extends JpaRepository<Products,Long> {

    @Override
    List<Products> findAll();
}
