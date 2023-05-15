import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/Common/NavBar";
import {motion,  useScroll, useInView} from 'framer-motion';
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
    // const controls = useAnimationControls();
    // const observer = IntersectionObserver((e)=> {
    //     e.forEach(element => {
    //         if(element.isIntersecting){

    //         }
    //     });
    // })
    // let div = document.querySelectorAll('div') //div 태그로 되어잇는 모든 것들을 가져옴
    // observer.observe(div[0]) //div[0]의 요소가 화면에 나타나는 것을 찾음

    const [isInView1, setIsInView1] = useState(false);
    const [isInView2, setIsInView2] = useState(false);
    const ref_first = useRef(null);
    const ref_second = useRef(null);
    const isInViewFirst = useInView(ref_first, { once: true });
    const isInViewSecond = useInView(ref_second, { once: true });
    console.log(isInViewFirst);
    console.log(isInViewSecond);
    
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
            <div style={{height: '450px', display: 'flex', marginBottom: '18%'}}>
                <motion.div
                style={{width: '30%'}}
                animate={{ scale: [0, 0.7, 1.3, 1, 1.3, 1.0] }}
                transition={{ delay: 1, duration: 1.2, times: [0, 0.1, 0.5, 0.8, 1, 1.2] }}
                ><Img alt="chicken" src="img/그림1.png"></Img></motion.div>
                <div style={{marginTop: '15%', marginLeft: '30%'}}>
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
            

            <div style={{height: '800px', backgroundColor: 'rgb(252,200,103)', marginTop: '0', position: 'relative'}} >
                <div style={{position:'absolute', marginTop: '10%', marginLeft: '10%'}}>
                    <motion.div
                        whileInView={() => {
                            // when element in viewport , set IsInView true!
                            setIsInView1(true);
                            return {};
                        }}
                        >
                        <motion.div 
                        ref={ref_first}
                        initial={{x: -1000}}
                        animate={isInView1 && {x: isInViewFirst ? [-1000,-7500, 0] : null}}
                        transition={{duration: isInViewFirst ? 1 : null, times: isInViewFirst ? [0, 0.2, 0.5] : null}}>
                            <TitleText>이 웹사이트는</TitleText>
                        </motion.div>
                            <br />
                        <motion.div 
                        ref={ref_first}
                        initial={{x: -1000}}
                        animate={isInView1 && {x: isInViewFirst ? [-1500, 0] : -1500}}
                        transition={{delay: 1, duration: 1, times: [0, 0.5] }}>
                            <ContentText2>뿌링클을 너무 사랑하는 사람들이 제작하였습니다.</ContentText2>
                            <br />
                            <ContentText2>BHC 매장마다 뿌링클 맛이 다른 걸 느끼신다구요?</ContentText2>
                            <ContentText2>전국 매장을 돌아다니며 모든 매장의 뿌링클을 맛보고 싶으시다구요?</ContentText2>
                            <br />
                            <br />
                            <br />
                            <br />
                        </motion.div> 
                        <motion.div 
                        ref={ref_first}
                        initial={{x: -1000}}
                        animate={isInView1 && {x: isInViewFirst ? [-1500, 0] : -1500}}
                        transition={{delay: 2, duration: 2 , times: [0, 0.5]}}>
                            <TitleText style={{fontSize: '4rem'}}>지금 바로, BBuRingLog를 사용해보세요 !</TitleText>
                        </motion.div>
                    </motion.div>
                </div>
            </div>


            <div style={{height: '800px', width: '100%', backgroundColor: 'white', border: '1px, solid, black', position: 'absolute', marginTop: '0' }}>
                <div style={{marginTop: '15%', marginRight: '10%', textAlign: 'right'}}>
                    <motion.div
                        whileInView={() => {
                            // when element in viewport , set IsInView true!
                            setIsInView2(true);
                            return {};
                        }}
                    >
                        <motion.div 
                        ref={ref_second}
                        animate={isInView2 && {x: isInViewSecond ? [-10000,-5000,0] : -10000}}
                        transition={{duration: isInViewSecond ? 2 : null, times: isInViewSecond ?  [0, 0.2, 0.5] : null}}>
                            <TitleText>사이트 사용법</TitleText>
                        </motion.div>
                            <br />
                        <motion.div 
                        ref={ref_second}
                        animate={isInView2 && {x: isInViewSecond ? [-10000,-5000,0] : null}}
                        transition={{delay: 1, duration: 1, times: [0, 0.2, 0.5] }}>
                            <ContentText2>회원가입/로그인</ContentText2>
                            <ContentText2>지도검색</ContentText2>
                            <ContentText2>사진, 평점, 글 등록</ContentText2>
                            <ContentText2>그룹 참가하면 그룹끼리 글 볼 수 있음</ContentText2>
                        </motion.div> 
                    </motion.div>
                </div>
            </div>

        </>
    )
}

const Img= styled.img`
    width: 100%;
    height: auto;
    opacity: 80%;
    margin-left: 30%;
    margin-top: 10%;
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
