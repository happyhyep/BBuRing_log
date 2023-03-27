package com.BHC.TRAVEL.HYEN_SHAN.MAP;

import com.mongodb.lang.Nullable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@Document(collection = "MAP")
public class MapDTO {
    @Id
    private String _id;
    private String y;
    private String x;
    private String road_address_name;
    private String place_url;
    private String place_name;
    private String phone;
    private String id;
    @Nullable
    private String distance;
    private String category_name;
    private String category_group_name;
    private String category_group_code;
    private String address_name;


}