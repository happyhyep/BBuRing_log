import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LoginComponent from "../components/LoginComponent";
import NavBar from "../components/NavBar";

export default function LogIn() {
    return(
        <>
            <NavBar>
                    <div><NavLink to='/'>Home</NavLink></div>
            </NavBar>
            <div style={{margin: 'auto'}}><LoginComponent></LoginComponent></div>
        </>
    )
}
