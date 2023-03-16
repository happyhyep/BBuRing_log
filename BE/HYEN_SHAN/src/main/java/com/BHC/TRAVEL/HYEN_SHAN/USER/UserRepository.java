package com.BHC.TRAVEL.HYEN_SHAN.USER;

import com.BHC.TRAVEL.HYEN_SHAN.USER.MODEL.USER;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Create_account_param;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Login_param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository implements UserRepositoryimpl{

    @Autowired
    MongoTemplate mongoTemplate;
    @Override
    public USER Finding(MongoTemplate mongoTemplate,Login_param param){
        Criteria criteria = new Criteria("ID");
        criteria.is(param.getId());
        Query query = new Query(criteria);
        return mongoTemplate.findOne(query,USER.class,"USER");

    }
    @Override
    public USER Find_id(MongoTemplate mongoTemplate,String id){
        Criteria criteria = new Criteria("ID");
        criteria.is(id);
        Query query = new Query(criteria);
        System.out.println("id = " + id);
        return mongoTemplate.findOne(query,USER.class,"USER");

    }

    @Override
    public void Modify_pw(MongoTemplate mongoTemplate, String id,String pw){
        Criteria criteria = new Criteria("ID");
        criteria.is(id);
        Query query = new Query(criteria);
        Update update = new Update();
        update.set("password",pw);
        mongoTemplate.updateMulti(query,update,"USER");

    }

}
