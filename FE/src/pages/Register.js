import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/Common/NavBar";
import RegisterComponent from "../components/Register/RegisterComponent";

export default function Register() {
    return(
        <>
                <NavBar>
                        <div><NavLink to='/'>Home</NavLink></div>
                </NavBar>
                <div style={{margin: 'auto'}}><RegisterComponent></RegisterComponent></div>
        </>
    )
}
