package com.BHC.TRAVEL.HYEN_SHAN.GROUP;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "GROUPS")
public class GroupParams {
    String name;
    String leader;



    @Builder
    public GroupParams(String name,String leader){
        this.name =name;
        this.leader = leader;
    }



}
