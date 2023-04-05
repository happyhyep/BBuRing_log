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
    private String name;
    private String phone;
    private String address;


}