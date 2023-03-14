import React from "react";
import NavBar from "../components/NavBar";
import MapContainer from "../components/MapContainer";
import SearchBar from "../components/SearchBar";

export default function Home(){
    return (
        <>
            <NavBar></NavBar>
            <div><SearchBar></SearchBar></div>
            <div><MapContainer></MapContainer></div>
        </>
    )
}
