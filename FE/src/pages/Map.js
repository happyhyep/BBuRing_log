import React from "react";
import {  NavLink } from "react-router-dom";
import MapContainer from "../components/MapContainer";
import styled from "styled-components";
import NavBar from "../components/NavBar";

export default function Map(){
    return (
        <>
            <NavBar>
                <div><NavLink to='/'>Home</NavLink></div>
            </NavBar>
                <div><MapContainer></MapContainer></div>
        </>
    )
}



