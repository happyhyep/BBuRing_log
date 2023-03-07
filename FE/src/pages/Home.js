import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";

export default function Home(){
    return (
        <div>
                <NavBar></NavBar>
        </div>
    )
}

const TopMenu = styled.div`
    height: 10vh;
    display: flex;
    background-color: #E9AC06;
    margin-right: 1em;
    align-items: center;
    justify-content: space-between;
`