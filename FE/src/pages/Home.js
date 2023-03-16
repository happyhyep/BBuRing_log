import React from "react";
import NavBar from "../components/NavBar";
import MapContainer from "../components/MapContainer";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function Home(){
    const navigate = useNavigate()
    const onWriteButton = () => {
        navigate("/write")
    }

    return (
        <>
            <NavBar></NavBar>
            <div><SearchBar></SearchBar></div>
            <div><MapContainer></MapContainer></div>
            <WriteButton onClick={onWriteButton}>✍️ 글 쓰기</WriteButton>
        </>
    )
}

const WriteButton = styled.button`
    position : fixed;
    bottom :5%;
    right : 2rem;

    width: 100px;
    border-radius: 0.3rem;
    border: 1px solid ;
    background-color: rgb(254,213,107);

    font-size: 15px;
    color: rgb(234,130,99);
    text-align: center;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
`