package com.BHC.TRAVEL.HYEN_SHAN.POSTING;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "POSTING")
public class PostingPrams {
    String user_id;
    String description;
    String file_loc;

    @Builder
    public PostingPrams(String user_id, String description, String file_loc){
        this.user_id=user_id;
        this.description = description;
        this.file_loc = file_loc;
    }
}
