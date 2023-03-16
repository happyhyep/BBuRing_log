import React, { useState } from "react";
import styled from "styled-components";

function SearchBar() {
    const [search, setSearch] = useState()

    const onSearchHandler = (e) => {
        setSearch(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
        console.log(search);
    }

    return(
        <div style={{marginTop: '3rem'}}>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <Input onChange={onSearchHandler} placeholder="주소를 검색하세요"></Input>
                <Button onClick={onSubmitHandler}>검색</Button>
            </div>
        </div>
    )

}

export default SearchBar;

const Input = styled.input`
    width: 500px;
    height: 30px;
    border-radius: 0.5rem;
    border: 1px solid rgb(151,142,113);
    
`

const Button = styled.button`
    width: 50px;
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