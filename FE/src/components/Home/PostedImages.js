import React from "react";
import PostedImageComponent from "./PostedImageComponent";
import { motion } from "framer-motion";

function PostedImages(props) {

    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.71, 0.71, 0.2, 1.01]}} >
        <div style={{
            width: '575px',
            margin: '0 auto',
            marginTop: '50px',
        }}><PostedImageComponent nowClickedMarker={props}/></div></motion.div>
    )
}

export default PostedImages
