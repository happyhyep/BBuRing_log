package com.BHC.TRAVEL.HYEN_SHAN.USER.MODEL;

import com.mongodb.lang.Nullable;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@AllArgsConstructor
@Document(collection = "USER")
public class USER {

    @Transient
    public static final String SEQUENCE_NAME = "SEQUENCE";
    @Id
    private String _id;
    private String ID;
    private String password;
    private String nickname;
    private String name;
    @Nullable
    private String group;

    private Boolean request = false;

    @Builder
    public USER(String ID, String password, String nickname,String name, String group){
        this.ID = ID;
        this.password = password;
        this.nickname = nickname;
        this.name = name;
        this.group = group;
    }


    public USER() {

    }

}
