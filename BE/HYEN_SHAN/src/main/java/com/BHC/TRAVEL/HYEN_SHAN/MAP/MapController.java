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

@Controller
@RequestMapping("/map")
@CrossOrigin("localhost:3000")
public class MapController {
    @Autowired
    MongoTemplate mongoTemplate;
    ObjectMapper objectMapper = new ObjectMapper();
    @ResponseBody
    @GetMapping("search")
    public MapDTO Search(@RequestParam String item) throws JsonEOFException {
        System.out.println("item = " + item);
        Criteria criteria = new Criteria("address_name");
        criteria.is("서울 종로구 관철동 14-1");
        Query query = new Query(criteria);
        System.out.println(mongoTemplate.findOne(query,MapDTO.class,"MAP"));
        return mongoTemplate.findOne(query, MapDTO.class,"MAP");
    }



}
