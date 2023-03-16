package com.BHC.TRAVEL.HYEN_SHAN.USER;

import com.BHC.TRAVEL.HYEN_SHAN.USER.MODEL.USER;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Create_account_param;
import com.BHC.TRAVEL.HYEN_SHAN.USER.PARAMS.Login_param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepositoryimpl {

    public USER Finding(MongoTemplate mongoTemplate, Login_param param);
    public USER Find_id(MongoTemplate mongoTemplate,String id);
    public void Modify_pw(MongoTemplate mongoTemplate, String id,String pw);
}
