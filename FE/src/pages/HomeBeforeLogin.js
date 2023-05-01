import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/Common/NavBar";
import {motion} from 'framer-motion';
import styled from "styled-components";

export default function HomeBeforeLogin() {
    return(
        <>
            <div>
                <NavBar>
                    <div><NavLink to='/'></NavLink></div>
                </NavBar>
            </div>
            <div style={{position: 'relative', height: '650px'}}>
                <img alt="chicken" src="img/배경.png" style={{width: '100%', height: '650px', marginBottom: '0px'}} ></img>
                <div style={{position: 'absolute', top: "50px"}}>
                <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, times: [0, 0.2, 0.5] }}
                ><Img alt="chicken" src="img/그림1.png"></Img></motion.div></div>
            </div>
            <div style={{position: 'relative', marginTop: '0'}}>
                <img alt="chicken" src="img/배경2.png" style={{width: '100%' }} ></img>
            </div>
        </>
    )
}

const Img= styled.img`
    width: 500px;
    height: auto;
`