package com.DragonBite.services;

import com.DragonBite.models.Videos;
import com.DragonBite.repositories.VideosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class VideosService {


    private  VideosRepo videosRepo;

    @Autowired
    public VideosService(VideosRepo videosRepo){
        this.videosRepo=videosRepo;
    }


    public  String addVideo(Videos videos){
        videos.setDate(new Date());

        Videos v=videosRepo.save(videos);
        return "yt-Vedio Added Successfully";

    }

    public List<Videos> viewVideo() {
        List<Videos> videos=videosRepo.findAll();

        return videos;
    }

    public String delete(long id) {
        videosRepo.deleteById(id);
        return "video with id: "+ id+ "is deleted";
    }
}
