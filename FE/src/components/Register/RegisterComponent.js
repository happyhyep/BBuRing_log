import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { registerUser } from "../../store/User";
import axios from "axios";
import { motion } from "framer-motion";

export default function RegisterComponent() {
    const [name, setName] = useState("");
    const [nickname, setNickName] = useState("");
    const [id, setId] = useState(""); 
    const [password, setPassword] = useState("");

    const onNameHandler = (e) => {
        setName(e.currentTarget.value);
    }
    const onNicknameHandler = (e) => {
        setNickName(e.currentTarget.value);
    }
    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    }
    const onPwHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
        registerUser({name: name, id: id, pw: password, nick: nickname})
        //axios.post(`http://localhost:8080/user/register`, {name: name, id: id, pw: password, nick: nickname})
        e.preventDefault(); //submit 했을 떄 리프레쉬 방지
        window.location.replace('/');
    }
    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 0.3,
        delay: 0.3,
        ease: [0.71, 0.71, 0.2, 1.01]}} >
            <Positioner>
                <Logo>Register</Logo>
                <Contents>
                    <form onSubmit={onSubmitHandler}>
                        <Label htmlFor="name">이름</Label>
                        <br />
                        <Input type="text" id="name" onChange={onNameHandler} placeholder="홍길동"></Input>
                        <Label htmlFor="nickname">닉네임</Label>
                        <br />
                        <Input type="text" id="nickname" onChange={onNicknameHandler} placeholder="혠"></Input>
                        <Label htmlFor="id">아이디</Label>
                        <br />
                        <Input type="text" id="id" onChange={onIdHandler} placeholder="abc123"></Input>
                        <br />
                        <Label htmlFor="id">비밀번호</Label>
                        <br />
                        <Input type="password" id="password" onChange={onPwHandler} placeholder="def1234"></Input>
                    </form>            
                </Contents>
                <Button type="submit" onClick={onSubmitHandler}>회원가입</Button>
                <RegisterLink><NavLink to="/login">로그인 페이지로</NavLink></RegisterLink>
                
            </Positioner>
        </motion.div>
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
    font-family: LINESeedRg;
`;

const Input = styled.input`
    width: 95%;
    border: 1px solid grey;
    border-radius: 0.5rem;
    outline: none;
    line-height: 2.5rem;
    padding-left: 0.5rem;
    padding-right: 0rem;
    margin-right: 1rem;
    margin-top: 0.1rem;

    font-size: 0.9rem;
    font-family: LINESeedRg;
    color: rgb(151,142,113);
`;

const Label = styled.label`
    font-size: 0.8rem;
    font-family: LINESeedRg;
    color: grey;
`

const Button = styled.button`
    width: 92%;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-color: white;
    border-radius: 0.5rem;

    background: rgb(254,213,107);
    color: rgb(234,130,99);

    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    font-family: LINESeedRg;

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
    font-family: LINESeedRg;
    color: grey;
`