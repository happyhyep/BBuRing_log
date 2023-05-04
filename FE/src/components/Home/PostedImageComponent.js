import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fetchAllPosts } from "../../store/Write";
import { motion } from "framer-motion"
import styled from "styled-components";

function PostedImageComponent(props) {
    const [isHover, setIsHover] = useState(false);
    const [mouseOverComponentIdx, setMouseOverComponentIdx] = useState();

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
    return(<>
        {images.map((image, idx)=>{return (
            
            <img style={{
                width: '150px',
                height: '150px',
                margin: 'auto',
                marginLeft: '20px',
                marginRight: '20px',
                marginBottom: '20px',
                boxShadow: '0 5px 10px rgba(0, 0, 0, 0.8)',
                cursor: 'pointer',
            }} alt={setMouseOverComponentIdx} src={image} onClick={imageClick} onMouseOver={() => {setIsHover(1); setMouseOverComponentIdx(idx);}} onMouseLeave={() => setIsHover(0)} ></img>
           
         )})}
            
            {isHover ? 
                <Hover>
                    <Positioner>
                        <Star>별점 :</Star>
                        <Image src={images[mouseOverComponentIdx]}></Image>
                        <Contents>
                            {mouseOverComponentIdx}
                        </Contents>
                    </Positioner>
                </Hover>
                : null}
            </>
        
    )
}

export default PostedImageComponent

const Hover = styled.div`
    position: fixed;
    z-index: 10;
    bottom :5%;
    left : 2rem;

    transition: top 1s ease-in; // trasition 으로 top 이동시 자연스럽게 만들어 주자
    animation-duration: 2s;  	// 애니메이션 3초동안 실행 
    animation-name: fadeout; 	// 애니메이션 효과는 fade-out

    @keyframes fadeout { 		// fade-out시 opacity를 흐릿하다가 선명하기 만들자
    0% {
        opacity: 0; 
    }
    100% {
        opacity: 1;
    }
    }
`

const Positioner = styled.div`
    margin: auto;
    width: 180px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
    padding-bottom: 0.01rem;
    border-radius: 0.5rem;
`;

const Star = styled.div`
    background-color: white;
    height: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom: 2px solid rgb(254,213,107);

    color: rgb(234,156,094);
    font-family: UhBeeZZIBA-Regular;
    font-size: 0.5rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

const Image = styled.img`
    width: 180px;
    height: 180px;
    margin: 0px;
`

const Contents = styled.div`
    background: white;
    padding: 0.8rem;
    height: auto;
    font-family: UhBeeZZIBA-Regular;
    font-size: 0.5rem;
`;
