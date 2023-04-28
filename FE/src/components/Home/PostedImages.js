import React from "react";
import PostedImageComponent from "./PostedImageComponent";

function PostedImages(props) {

    return(
        <div style={{
            width: '575px',
            margin: '0 auto',
            marginTop: '50px',
        }}><PostedImageComponent nowClickedMarker={props}/></div>
    )
}

export default PostedImages
