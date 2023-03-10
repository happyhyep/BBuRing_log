import React from "react";

function PostImage() {
    let image = 'http://www.bhc.co.kr/upload/bhc/menu/ck20150130_470_v.jpg'

    return(
        <div><img alt="chicken" src={image}></img></div>
    )
}

export default PostImage