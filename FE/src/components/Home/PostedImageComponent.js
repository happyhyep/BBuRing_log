import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { fetchAllPosts } from "../../store/Write";

function PostedImageComponent(props) {
    const images = ['http://www.bhc.co.kr/upload/bhc/menu/ck20150130_470_v.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPa43fmrHgIZvcCgDkTgdGX8SUIq0L93Dnw&usqp=CAU',
                'https://blog.kakaocdn.net/dn/criONw/btqGWTUql5w/G8HUksO7r4UMzAsZXi9LN1/img.png',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQUcJ4_mvRnDoLb8SHubqrbzfd4zlIIK46FQ&usqp=CAU',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsvzaOGbC5pX_Ut5RPt5gtcBZj7Efxep740w&usqp=CAU',
                ]
    
    const fetchedimages = useEffect(() => {
        fetchAllPosts(props.nowClickedMarker)
    })
    const StyleDiv = {
        margin: 'auto',
        marginLeft: '10px',
        marginRight: '10px'
    }
    const navigate = useNavigate()
    const imageClick = () => {
        navigate("/post")
    }
    return(
        images.map((image)=>{return (
            <img style={{
                width: '150px',
                height: '150px',
                margin: 'auto',
                marginLeft: '20px',
                marginRight: '20px',
                marginBottom: '20px',
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.8)',
                cursor: 'pointer'
            }} alt="chicken" src={image} onClick={imageClick} ></img>
        )})
    )
}

export default PostedImageComponent
