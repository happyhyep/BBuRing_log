import React from "react";
import LoginComponent from "../components/LoginComponent";
import NavBar from "../components/NavBar";

export default function LogIn() {
    return(
        <>
            <NavBar></NavBar>
            <div style={{margin: 'auto'}}><LoginComponent></LoginComponent></div>
        </>
    )
}
