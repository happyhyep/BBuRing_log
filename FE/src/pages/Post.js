import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/Common/NavBar";
import PostComponent from "../components/Post/PostComponent";

export default function Post() {
    return(
        <>
        <NavBar></NavBar>
        <PostComponent></PostComponent>
        </>
    )
}