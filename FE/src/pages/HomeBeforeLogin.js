import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/Common/NavBar";

export default function HomeBeforeLogin() {
    return(
        <div>
        <NavBar>
            <div><NavLink to='/'></NavLink></div>
        </NavBar>
        <div>로그인 전 화면입니다.</div>
        </div>
    )
}