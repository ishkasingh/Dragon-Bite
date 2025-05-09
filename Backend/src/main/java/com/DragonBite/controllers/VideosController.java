package com.DragonBite.controllers;

import com.DragonBite.services.VideosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api/video")
public class VideosController {

    @Autowired
    private VideosService videosService;

    @GetMapping
    public ResponseEntity<?> viewVideo(){
        return new ResponseEntity<>(videosService.viewVideo(), HttpStatus.OK);
    }
}
