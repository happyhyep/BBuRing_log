import React from "react";
import SearchFriendComponent from "../components/Friend/SearchFriendComponent";
import NavBar from "../components/Common/NavBar";

export default function SearchFriend() {

    return(
        <>
            <NavBar></NavBar>
            <div style={{margin: 'auto'}}><SearchFriendComponent></SearchFriendComponent></div>
        </>
    )
}