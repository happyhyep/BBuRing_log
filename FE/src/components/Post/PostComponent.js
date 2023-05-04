import React from "react";
import styled from "styled-components";
import {motion} from 'framer-motion';

export default function PostComponent() {

    return(
        <>
         <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 0.2,
            delay: 0.1,
            ease: [0.71, 0.71, 0.2, 1.01]}} >
                <Positioner>
                    <Star>별점 :</Star>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuPa43fmrHgIZvcCgDkTgdGX8SUIq0L93Dnw&usqp=CAU'></Image>
                    <Contents>
                        간다ㅏ
                    </Contents>
                </Positioner>
            </motion.div>
        </>
    )
}

const Positioner = styled.div`
    margin: auto;
    margin-top: 1rem;
    width: 500px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
    position: relative;
    padding-bottom: 0.01rem;
    border-radius: 0.5rem;
`;

const Star = styled.div`
    background-color: white;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom: 2px solid rgb(254,213,107);

    color: rgb(234,156,094);
    font-family: UhBeeZZIBA-Regular;
    font-size: 1.5rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

const Image = styled.img`
    width: 500px;
    height: 500px;
`

const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
    font-family: UhBeeZZIBA-Regular;
`;
