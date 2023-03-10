import React from "react";
import {  NavLink } from "react-router-dom";
import MapContainer from "../components/MapContainer";

export default function Map(){
    return (
        <div>
                <div><NavLink to='/'>Home</NavLink></div>
                <MapContainer />
        </div>
    )
}


