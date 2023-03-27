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
        Criteria criteria = new Criteria("address_name");
        criteria.regex("^.*(" + item+").*");
        Query query = new Query(criteria);
        List<MapDTO> test = mongoTemplate.find(query, MapDTO.class, "MAP");
        test.forEach(name ->
                System.out.println("name = " + name));

        return test;
    }
}
