package com.BHC.TRAVEL.HYEN_SHAN.GROUP;

import com.BHC.TRAVEL.HYEN_SHAN.USER.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;



@Controller
@RequestMapping("/group")
@CrossOrigin("localhost:3000")
public class Group_Controller {
    @Autowired
    MongoTemplate mongoTemplate;

    ObjectMapper objectMapper = new ObjectMapper();
    UserRepository repository = new UserRepository();


    @ResponseBody
    @PostMapping("create")
    public String Create_Group(@RequestBody GroupParams param) throws JsonProcessingException {
        GroupParams temp = GroupParams.builder().name(param.name).leader(param.leader).build();
        mongoTemplate.insert(temp);
        return "OKAY";

    }

}


