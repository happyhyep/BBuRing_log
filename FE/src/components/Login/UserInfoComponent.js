import React from "react";
import styled from "styled-components";

export default function UserInfoComponent() {
    function onClick() {
        window.location.replace('/')
    }
    function onRequestLink() {
        window.location.replace('/searchfriend')
    }
    return(
        <Positioner>
            <Logo>My Info</Logo>
            <Contents>
                    <Label>아이디</Label>
                    <br />
                    <Box>{localStorage.getItem('id')}</Box>
                    <br />
                    <Label>닉네임</Label>
                    <br />
                    <Box>{localStorage.getItem('nickname')}</Box>     
                    <br />
                    <Label>내 연인</Label>
                    <br />
                    {localStorage.getItem("_id") == null ?
                                <RegisterButton onClick={onRequestLink}>연인 등록하러 가기</RegisterButton>
                        : <Box>localStorage.getItem("_id")</Box>}
            </Contents>
            <Button type="submit" onClick={onClick}>확인</Button>

            
        </Positioner>
    )
}

const Positioner = styled.div`
    margin: auto;
    margin-top: 8rem;
    width: 500px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.8);
    position: relative;
    padding-bottom: 0.01rem;
    border-radius: 0.5rem;
`;

const Logo = styled.div`
    background-color: rgb(254,213,107);
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;

    color: rgb(234,156,094);
    font-family: UhBeeZZIBA-Regular;
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
    
`;

const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
    font-family: UhBeeZZIBA-Regular;
`;

const Button = styled.button`
    width: 92%;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 1.2rem;
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

const RegisterButton = styled.button`
    width: 97%;
    border-color: grey;
    border-radius: 0.5rem;
    line-height: 2.5rem;

    background: white;

    font-size: 1rem;
    color: rgb(234,130,99);
    font-family: UhBeeZZIBA-Regular;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
    
`

const Box = styled.div`
    width: 95%;
    border: 1px solid grey;
    border-radius: 0.1rem;
    outline: none;
    line-height: 2.5rem;
    padding-left: 0.5rem;
    padding-right: 0rem;
    margin-right: 1rem;

    font-size: 1.2rem;
    font-family: UhBeeZZIBA-Regular;
    color: black;
    
`;

const Label = styled.label`
    font-size: 0.8rem;
    color: grey;
`