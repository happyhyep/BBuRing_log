package com.BHC.TRAVEL.HYEN_SHAN.POSTING;

import com.BHC.TRAVEL.HYEN_SHAN.USER.MODEL.USER;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Create_account_param;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/post")
@CrossOrigin("localhost:3000")
public class PostController {
    @Autowired
    MongoTemplate mongoTemplate;
    ObjectMapper objectMapper = new ObjectMapper();

    @ResponseBody
    @PostMapping("upload")
    public String Create_Account(@RequestBody Create_account_param param) throws JsonProcessingException {
        System.out.println(param.getId() + '+' + param.getName());
        Criteria criteria = new Criteria("ID");

        Query query = new Query(criteria);
        USER finding = mongoTemplate.findOne(query, USER.class, "USER");
        if (finding == null) {
            USER user = USER.builder().ID(param.getId()).password(param.getPw()).nickname(param.getNick()).name(param.getName()).build();
            mongoTemplate.insert(user);
            String tempText = objectMapper.writeValueAsString(user);
            return tempText;
        } else {
            System.out.println(finding.get_id() + "   +   " + finding.getName());
            return "존재하는 아이디.";
        }

    }


    
}