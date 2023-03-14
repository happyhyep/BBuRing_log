package com.BHC.TRAVEL.HYEN_SHAN.USER;

import com.BHC.TRAVEL.HYEN_SHAN.USER.MODEL.USER;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Create_account_param;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Login_param;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



@Controller
@RequestMapping("/user")
@CrossOrigin("localhost:3000")
public class UserController {
    @Autowired
    MongoTemplate mongoTemplate;
    ObjectMapper objectMapper = new ObjectMapper();
    @ResponseBody
    @PostMapping("register")
    public String Create_Account(@RequestBody Create_account_param param) throws JsonProcessingException {
        System.out.println(param.getId()+'+'+param.getName());
        Criteria criteria = new Criteria("ID");
        criteria.is(param.getId());
        Query query = new Query(criteria);
        USER finding = mongoTemplate.findOne(query,USER.class,"USER");
        if(finding ==null){
        USER user = USER.builder().ID(param.getId()).password(param.getPw()).nickname(param.getNick()).name(param.getName()).build();
        mongoTemplate.insert(user);
        String tempText = objectMapper.writeValueAsString(user);
        return tempText;}
        else {
            System.out.println(finding.get_id()+"   +   "+finding.getName());
            return "존재하는 아이디.";}

    }

    @ResponseBody
    @PostMapping("login")
    public String Login(@RequestBody Login_param param) throws JsonProcessingException {
        System.out.println(param.getId());
        Criteria criteria = new Criteria("ID");
        criteria.is(param.getId());
        Query query = new Query(criteria);
        USER user = mongoTemplate.findOne(query,USER.class,"USER");
        System.out.println(user);

        if (user != null){

        if (user.getPassword().equals(param.getPw())){
            String tempText = objectMapper.writeValueAsString(user);
            return tempText;
        }else{
            return "틀린 비번";
        }}
        else return "없는 아이디";


    }

}


