import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/Common/NavBar";
import {motion, useAnimationControls, useScroll} from 'framer-motion';
import styled from "styled-components";
import './style.css';

export default function HomeBeforeLogin() {

    // let scene = new THREE.Scene();
    // let renderer = new THREE.WebGLRenderer({
    //      canvas : document.querySelector('#canvas')
    // })

    // let camera = new THREE.PerspectiveCamera(30,1)
    // camera.position.set(0,0,5);

    // let loader = new GLTFLoader();
    // loader.load('../../../public/img/strong_chicken/scene.gltf', function(gltf){
    //  scene.add(gltf.scene);
    //  renderer.render(scene)
    // })
    const { scrollYProgress } = useScroll();
    const controls = useAnimationControls();



    return(
        <>
            <NavBar>
                <div><NavLink to='/'></NavLink></div>
            </NavBar>
            <motion.div className="bar"
            style={{ scaleX: scrollYProgress,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    width: '100%',
                    height: '10px',
                    transformOrigin: 0, 
                    transform: 'translate3d(0, 0, 0)',
                    background: 'rgb(252,214,131)'
            }} />
            <div style={{height: '600px', display: 'flex'}}>
                <motion.div
                style={{width: '30%'}}
                animate={{ scale: [0, 0.7, 1.3, 1, 1.3, 1.0] }}
                transition={{ delay: 1, duration: 1.2, times: [0, 0.1, 0.5, 0.8, 1, 1.2] }}
                ><Img alt="chicken" src="img/그림1.png"></Img></motion.div>
                <div style={{marginTop: '15%', marginLeft: '20%'}}>
                    <motion.div 
                        animate={{x: [100000,5000,0]}}
                        transition={{duration: 0.8, times: [0, 0.2, 0.5] }}>
                        <TitleText>전국 BHC를</TitleText>
                        <TitleText>찾아다니시나요?</TitleText>
                        <br />
                        <ContentText>BBuRingLog를 이용해보세요</ContentText>
                    </motion.div>
                </div>
            </div>
                {/* <canvas id="canvas" width="300" height="300"></canvas> */}
            
            <div style={{position: 'absolute', marginTop: '0'}}>
                <img alt="chicken" src="img/배경2.png" style={{width: '100%' }} ></img>
            </div>
            {(scrollYProgress >= 0.4) ?
            <div style={{position: 'relative', marginTop: '20%', marginLeft: '10%'}}>
                <motion.div 
                animate={{x: [-1000,-500,0]}}
                transition={{duration: 2, times: [0, 0.2, 0.5] }}>
                    <TitleText>이 프로젝트는</TitleText>
                </motion.div>
                    <br />
                <motion.div 
                animate={{x: [-1000,-500,0]}}
                transition={{delay: 1, duration: 1, times: [0, 0.2, 0.5] }}>
                    <ContentText2>이러이래서 시작됨ㅇㅇ</ContentText2>
                    <ContentText2>이러이래서이러링래ㅑ저디렂딜ㅈㄷ;ㅓㅍ</ContentText2>
                    <ContentText2>어쩌구저쩌구</ContentText2>
                </motion.div> 
            </div>: null}
            <div style={{height: '70rem', display: 'flex'}}>

            </div>
        </>
    )
}

const Img= styled.img`
    width: 100%;
    height: auto;
    opacity: 80%;
    margin-left: 30%;
    margin-top: 20%;
`
const TitleText = styled.div`
    font-family: LINESeedBd;
    font-size: 3.5rem;
    color: rgb(151, 142, 113);
`
const ContentText = styled.div`
    font-family: LINESeedRg;
    font-size: 1rem;
    color: rgb(151, 142, 113);
`

const ContentText2 = styled.div`
    font-family: LINESeedRg;
    font-size: 2rem;
    color: rgb(108, 102, 83);
`
