package com.BHC.TRAVEL.HYEN_SHAN.GROUP;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "GROUP_Request")
public class GroupRequest{
    String request_user;
    String group_name;
    String leader;



    @Builder
    public GroupRequest(String request_user,String group_name, String leader){
        this.request_user =request_user;
        this.group_name = group_name;
        this.leader = leader;
    }



}
