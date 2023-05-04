import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAllUser } from "../../store/User";
import { requestGroup } from "../../store/Group";
import GroupComponent from "./GroupComponent";
import {motion} from 'framer-motion'

export default function SearchGroupComponent() {
    const [searchText, setSearchText] = useState('')
    const [searchedList, setSearchedList] = useState([]);
    const [userList, setUserList] = useState([]);

    const groupsList = [
        {name: '맛집', leader: 'ㅎㅎ'},
        {name: '맛나', leader: 'ㄱㄱ'},
        {name: '기니', leader: '멤버1'},
        {name: '뿌링클', leader: 'ㄱㄱ'},
        {name: '뿌링모임', leader: '리더나야'},
        {name: '헤처모여', leader: '리더'},
        {name: '랄라랄', leader: 'ㅎㅇ'},
    ]
    const onSearchHandler = (e) => {
        setSearchText(e.currentTarget.value);
    }

    useEffect(() => {
        //console.log(searchText);
        fetchAllUser()
        .then((res) => {
                setUserList(res.data);
            return res.data;
        })
        const filteredList = groupsList.filter((search) => {
            if (searchText === '' || searchText === null) {
                return search;
            } else {
                return search?.name?.includes(searchText);
            }});
            setSearchedList(filteredList)
    }, [searchText])

    const onSubmitHandler = () => {
        console.log(searchText);
        console.log(searchedList[0].name)
        return(
            <>
            <Box>{searchedList[0].name}</Box>
            </>
        )
    }
    const onRequestHandler = () => {
        requestGroup();
        console.log("요청 완료")
    }

    return(
        <div style={{marginTop: '3rem'}}>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <div>
                    <Input onChange={onSearchHandler} placeholder="그룹의 이름을 검색하세요"></Input>
                </div>
                <Button onClick={onSubmitHandler}>검색</Button>
            </div>
                <Groups>
                    {searchedList.length > 0 ? <GroupComponent group={searchedList}></GroupComponent> : null}
                </Groups>
        </div>

    )
}

const Input = styled.input`
    width: 500px;
    height: 30px;
    border-radius: 0.5rem;
    border: 1px solid rgb(151,142,113);
    font-family: UhBeeZZIBA-Regular;
    
`

const Box = styled.div`
    width: 80%;
    height: 50%;
`

const Button = styled.button`
width: 50px;
height: 30px;
border-radius: 1rem;
border: 1px solid rgb(151,142,113);
background-color: rgb(254,213,107);

margin-left: 1rem;

font-size: 15px;
font-family: UhBeeZZIBA-Regular;
color: rgb(234,130,99);
text-align: center;

cursor: pointer;
user-select: none;
transition: .2s all;
`

const Groups = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-start: left;
    margin: auto;
    max-width: 720px;
    justify-content: flex-start;
`