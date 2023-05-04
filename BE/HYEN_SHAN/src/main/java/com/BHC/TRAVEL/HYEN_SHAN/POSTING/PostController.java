package com.BHC.TRAVEL.HYEN_SHAN.POSTING;

import com.BHC.TRAVEL.HYEN_SHAN.USER.MODEL.USER;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Create_account_param;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartException;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Controller
@RequestMapping("/post")
@CrossOrigin("localhost:3000")
public class PostController {
    @Autowired
    MongoTemplate mongoTemplate;
    ObjectMapper objectMapper = new ObjectMapper();


    @ResponseBody
    @GetMapping("upload")
    public String newFile(){
        return "NEW";
    }
    @ResponseBody
    @PostMapping("upload")
    public ResponseEntity Uploadfile(@RequestPart(value="uploadImage",required = false)  MultipartFile file, @RequestPart String uploadDescription,@RequestPart String userid) throws MultipartException, IOException {
        System.out.println("desc = " + uploadDescription);
        String path = "etc/IMAGES";
        path = path+"\\"+file.getOriginalFilename();
        System.out.println("path = " + path);
        file.transferTo(new File(path));
        System.out.println(file);
        PostingPrams temp = PostingPrams.builder().user_id(userid).description(uploadDescription).file_loc(path).build();
        return ResponseEntity.ok().build();

    }



}