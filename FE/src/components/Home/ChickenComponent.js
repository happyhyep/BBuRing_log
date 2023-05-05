import React from "react";
import {GLTFLoader} from 'GLTFLoader';
import * as THREE from 'three';
import chicken from '../../../public/img/strong_chicken/scene.gltf'

export default function LoginComponent() {
   let scene = new THREE.Scene();
   let renderer = new THREE.WebGLRenderer({
        canvas : document.querySelector('#canvas')
   })
   let loader = new GLTFLoader();
   loader.load('../../../public/img/strong_chicken/scene.gltf', function(gltf){
    scene.add(gltf.scene);
    renderer.render(scene)
   })

   return(
        <canvas id="canvas" width="300" heightt="300"></canvas>
   )
}