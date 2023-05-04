import React from "react";
import NavBar from "../components/Common/NavBar";
import WriteImageComponent from "../components/Write/WriteImageComponent";
import { useLocation } from "react-router";

export default function Write(){
    const location = useLocation();
    const nowClickedMarker = location.state.marker
    return (
        <>
            <NavBar></NavBar>
            <WriteImageComponent nowClickedMarker={nowClickedMarker}></WriteImageComponent>
        </>
    )
}
