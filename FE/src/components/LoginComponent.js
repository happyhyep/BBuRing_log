import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function LoginComponent() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const onIdHandler = (e) => {
        setId(e.currentTarget.value)
    }
    const onPwHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault(); //submit 했을 떄 리프레쉬 방지
        console.log(id, password)
    }
    return(
        <Positioner>
            <Logo>Login</Logo>
            <Contents>
                <form onSubmit={onSubmitHandler}>
                    <Label htmlFor="id">아이디</Label>
                    <br />
                    <Input type="text" id="id" onChange={onIdHandler} placeholder="아이디"></Input>
                    <br />
                    <Label htmlFor="id">비밀번호</Label>
                    <br />
                    <Input type="text" id="password" onChange={onPwHandler} placeholder="비밀번호"></Input>
                </form>            
            </Contents>
            <Button type="submit">로그인</Button>

            <RegisterLink><NavLink to="/auth/register">회원가입</NavLink></RegisterLink>
            
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
`;

const Logo = styled.div`
    background-color: #E9AC06;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: white;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
    
`;

const Input = styled.input`
    width: 95%;
    border: 1px solid grey;
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1.2rem;
    padding-left: 0.5rem;
    padding-right: 0rem;
    margin-right: 1rem;
    color: grey;
`;

const Label = styled.label`
    font-size: 0.8rem;
    color: grey;
`

const Button = styled.button`
    width: 92%;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    background: #E9AC06;
    color: white;

    text-align: center;
    font-size: 1rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
`

const RegisterLink = styled.div`
    margin-top: 0.8rem;
    margin-right: 2rem;
    margin-bottom: 1rem;

    text-align: right;
    font-size: 0.8rem;
    color: grey;
`