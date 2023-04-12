package com.BHC.TRAVEL.HYEN_SHAN.MAP;


import com.BHC.TRAVEL.HYEN_SHAN.USER.MODEL.USER;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Login_param;
import com.fasterxml.jackson.core.io.JsonEOFException;
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
import java.util.List;

@Controller
@RequestMapping("/map")
@CrossOrigin("localhost:3000")
public class MapController {
    @Autowired
    MongoTemplate mongoTemplate;
    ObjectMapper objectMapper = new ObjectMapper();
    @ResponseBody
    @GetMapping("search")
    public List<MapDTO> Search(@RequestParam String item) throws JsonEOFException {
        System.out.println("item = " + item);
        Criteria criteria = new Criteria("address");
        criteria.regex("^.*(" + item+").*");
        Query query = new Query(criteria);
        List<MapDTO> test = mongoTemplate.find(query, MapDTO.class, "MAP");

        Criteria criteria2 = new Criteria("name");
        criteria2.regex("^.*(" + item+").*");
        Query query2 = new Query(criteria2);

        List<MapDTO> test2 = mongoTemplate.find(query2,MapDTO.class,"MAP");
        for(MapDTO a : test2){
            test.add(a);
        }

        test.forEach(name ->
                System.out.println("name = " + name));

        return test;
    }


    @ResponseBody
    @GetMapping("all")
    public List<MapDTO> all() throws JsonEOFException {
        List<MapDTO> test = mongoTemplate.findAll(MapDTO.class, "MAP");


        return test;
    }
}
