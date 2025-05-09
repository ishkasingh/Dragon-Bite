package com.DragonBite.repositories;

import com.DragonBite.models.Blog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepo extends JpaRepository<Blog,Long> {
    void deleteById(long id);
}
