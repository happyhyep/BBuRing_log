import React from "react";
import NavBar from "../components/Common/NavBar";
import UserInfoComponent from "../components/Login/UserInfoComponent";

export default function UserInfo() {
    return(
        <>
            <NavBar></NavBar>
            <div style={{margin: 'auto'}}><UserInfoComponent></UserInfoComponent></div>
        </>
    )
}
