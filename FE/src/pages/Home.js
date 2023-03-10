import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";

export default function Home(){
    return (
        <>
            <div>
                    <NavBar></NavBar>
            </div>
            <div style={{
                margin: 'auto'
            }}>
                샨&혠의 뿌링log
            </div>
            <NavLink to='/map'>Map</NavLink>
        </>
    )
}
