import React from "react";
import LoginComponent from '../components/Login/LoginComponent'
import NavBar from "../components/Common/NavBar";

export default function LogIn() {
    return(
        <>
            <NavBar></NavBar>
            <div style={{margin: 'auto'}}><LoginComponent></LoginComponent></div>
        </>
    )
}
