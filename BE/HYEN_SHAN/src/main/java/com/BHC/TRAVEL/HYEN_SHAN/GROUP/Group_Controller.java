package com.BHC.TRAVEL.HYEN_SHAN.GROUP;

import com.BHC.TRAVEL.HYEN_SHAN.USER.MODEL.USER;
import com.BHC.TRAVEL.HYEN_SHAN.USER.UserRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;



@Controller
@RequestMapping("user/group")
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

    @ResponseBody
    @GetMapping("request")
    public String Request_Group(String Userid, String GroupName) throws JsonProcessingException {
        Criteria criteria = new Criteria("name");
        criteria.is(GroupName);
        Query query = new Query(criteria);
        GroupParams temp = mongoTemplate.findOne(query, GroupParams.class);

        Criteria criteria1 = new Criteria("ID");
        criteria.is(Userid);
        Query query1 = new Query(criteria);
        mongoTemplate.up
        USER user = mongoTemplate.findOne(query1, USER.class);


        GroupRequest request = GroupRequest.builder().group_name(GroupName).leader(temp.getLeader()).request_user(Userid).build();
        mongoTemplate.insert(request);
        return "요청성공";

    }

    @ResponseBody
    @GetMapping("accept")
    public String AcceptGroup(String Userid, String GroupName) throws JsonProcessingException {
        Criteria criteria = new Criteria("name");
        criteria.is(GroupName);
        Query query = new Query(criteria);
        GroupRequest temp = mongoTemplate.findOne(query, GroupRequest.class);
        mongoTemplate.insert(request);
        return "요청성공";

    }

}


