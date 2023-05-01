import React from "react";
import SearchFriendComponent from "../components/Group/SearchGroupComponent";
import NavBar from "../components/Common/NavBar";

export default function SearchGroup() {

    return(
        <>
            <NavBar></NavBar>
            <div style={{margin: 'auto'}}><SearchFriendComponent></SearchFriendComponent></div>
        </>
    )
}