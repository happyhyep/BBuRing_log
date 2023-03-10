import React from "react";
import {  NavLink } from "react-router-dom";
import MapContainer from "../components/MapContainer";
import styled from "styled-components";

export default function Map(){
    return (
        <>
            <TopMenu>
                <div><NavLink to='/'>Home</NavLink></div>
            </TopMenu>
                <div><MapContainer></MapContainer></div>
        </>
    )
}

const TopMenu = styled.div`
    height: 10vh;
    display: flex;
    background-color: #E9AC06;
    align-items: center;
    justify-content: space-between;
`



