import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAllUser } from "../../store/User";
import { requestFriend } from "../../store/Friend";

export default function SearchFriendComponent() {
    const [searchText, setSearchText] = useState('')
    const [searchedList, setSearchedList] = useState([]);
    const [userList, setUserList] = useState([]);

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
        const filteredList = userList.filter((search) => {
            if (searchText === '' || searchText === null) {
                return search;
            } else {
                return search?.name?.includes(searchText);
            }});
            setSearchedList(filteredList)
    }, [searchText])

    const onSubmitHandler = () => {
        return(
            <setSearchedList></setSearchedList>
        )
    }
    const onRequestHandler = () => {
        requestFriend();
        console.log("요청 완료")
    }

    return(
        <div style={{marginTop: '3rem'}}>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <div>
                    <Input onChange={onSearchHandler} placeholder="연인의 아이디를 검색하세요"></Input>
                    <Box>{searchedList}</Box>
                </div>
                <Button onClick={onSubmitHandler}>검색</Button>
            </div>
        </div>

    )
}

const Input = styled.input`
    width: 500px;
    height: 30px;
    border-radius: 0.5rem;
    border: 1px solid rgb(151,142,113);
    
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
color: rgb(234,130,99);
text-align: center;

cursor: pointer;
user-select: none;
transition: .2s all;
`