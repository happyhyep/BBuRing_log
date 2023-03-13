import React from "react";
import NavBar from "../components/NavBar";
import MapContainer from "../components/MapContainer";

export default function Home(){
    return (
        <>
            <NavBar></NavBar>
            <div><MapContainer></MapContainer></div>
        </>
    )
}
