package com.BHC.TRAVEL.HYEN_SHAN.USER;

import com.BHC.TRAVEL.HYEN_SHAN.USER.MODEL.USER;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Create_account_param;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Home_param;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Login_param;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.annotation.JsonAppend;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;



@Controller
@RequestMapping("/user")
@CrossOrigin("localhost:3000")
public class UserController {
    @Autowired
    MongoTemplate mongoTemplate;

    ObjectMapper objectMapper = new ObjectMapper();
    UserRepository repository = new UserRepository()
;    @ResponseBody
    @PostMapping("register")
    public String Create_Account(@RequestBody Create_account_param param) throws JsonProcessingException {
        Login_param test = new Login_param(param.getId(),param.getPw());
        USER finding = repository.Finding(mongoTemplate,test);
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
    public Home_param Login(@RequestBody Login_param param) throws JsonProcessingException {
        System.out.println(param.getId());
        USER user =repository.Finding(mongoTemplate,param);
        if (user != null){
        if (user.getPassword().equals(param.getPw())){
            Home_param home = new Home_param(Boolean.FALSE,"none",param.getId(),param.getPw(),user.getName(),user.getNickname());
            return home;
        }else{
            Home_param false_home = new Home_param(Boolean.TRUE,"틀린 비밀번호",null,null,null,null);
            return false_home;
        }}
        else {
            Home_param false_home = new Home_param(Boolean.TRUE,"없는 아이디",null,null,null,null);
            return false_home;
        }


    }

    @ResponseBody
    @PostMapping("modify")
    public String Modify(@RequestBody Login_param param) throws JsonProcessingException {
        repository.Modify_pw(mongoTemplate, param.getId(), param.getPw());
        USER test = repository.Finding(mongoTemplate,param);
        return objectMapper.writeValueAsString(test);


    }

}


