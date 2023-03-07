import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import MapContainer from "../components/MapContainer";
import NavBar from "../components/NavBar";

export default function Map(){
    return (
        <div>
                <div><NavLink to='/'>Home</NavLink></div>
                <MapContainer />
        </div>
    )
}
