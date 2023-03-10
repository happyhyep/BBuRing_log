import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Post() {
    return(
        <NavBar>
            <div><NavLink to='/'>Home</NavLink></div>
        </NavBar>
    )
}