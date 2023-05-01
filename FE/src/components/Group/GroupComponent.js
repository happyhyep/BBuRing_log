import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

function GroupComponent(props) {
    

    return(
        (props.group).map((data)=>{return (
            <Positioner>
                <Logo>[{data.name}]그룹</Logo>
                <Contents>
                    <br />
                    <Label>그룹 리더</Label>
                    <br />
                    <Box>{data.leader}</Box>
                    <br />
                    <Button>참여 요청</Button>
                </Contents>
            </Positioner>
        )})
    )
}

export default GroupComponent

const Positioner = styled.div`

    width: 200px;
    height: auto;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.8);
    position: relative;

    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    padding-bottom: 0.01rem;
    border-radius: 0.5rem;
`;

const Logo = styled.div`
    background-color: rgb(254,213,107);
    height: 2.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    color: rgb(234,156,094);
    font-family: UhBeeZZIBA-Regular;
    font-size: 1.3rem;
    letter-spacing: 5px;
    text-decoration: none;
    
`;

const Contents = styled.div`
    background: white;
    padding: 0.5rem;
    height: auto;
    border-radius:0.5rem;
    font-family: UhBeeZZIBA-Regular;
`;

const Button = styled.button`
    width: 100%;

    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-color: white;
    border-radius: 0.5rem;

    background: rgb(254,213,107);
    color: rgb(234,130,99);

    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    font-family: UhBeeZZIBA-Regular;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
`
const Label = styled.label`
    font-size: 0.8rem;
    color: grey;
`

const Box = styled.div`
    width: 95%;
    height: 50%;
`

const Group = styled.div`
    width: 150px;
    height: 150px;
    margin: auto;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
    cursor: pointer;

    font-size: 15px;
    font-family: UhBeeZZIBA-Regular;
    color: rgb(234,130,99);
    text-align: center;


`