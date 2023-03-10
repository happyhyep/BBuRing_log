import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LoginComponent from "../components/LoginComponent";

export default function LogIn() {
    return(
        <div>
            <TopMenu>
                    <div><NavLink to='/'>Home</NavLink></div>
            </TopMenu>
            <div style={{margin: 'auto'}}><LoginComponent></LoginComponent></div>
        </div>
    )
}

const TopMenu = styled.div`
    height: 10vh;
    display: flex;
    background-color: #E9AC06;
    align-items: center;
    justify-content: space-between;
`
