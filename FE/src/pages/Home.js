import React from "react";
import NavBar from "../components/Common/NavBar";
import MapContainer from "../components/Home/MapContainer";
import SearchBar from "../components/Home/SearchBar";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function Home(){

    return (
        <>
            <NavBar></NavBar>
            <div><SearchBar></SearchBar></div>
            <div><MapContainer></MapContainer></div>

        </>
    )
}
