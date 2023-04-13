import React, { useEffect, useState } from "react";
import styled from "styled-components";
<<<<<<< HEAD
import { fetchAllMapAPI } from "../../store/MapSearch";
import axios from "axios";
=======
>>>>>>> d6b23528 (searchbar 드롭박스 구현)

function SearchBar() {
    const [searchText, setSearchText] = useState('')
    const [searchedList, setSearchedList] = useState([]);
<<<<<<< HEAD
    const [bhcList, setBhcList] = useState([]);

=======

    const bhc_list = [
        {name: "가나다"},
        {name: "수원 영통"},
        {name: "용인 서천"},
        {name: "강원도"},
    ]
>>>>>>> d6b23528 (searchbar 드롭박스 구현)
    const onSearchHandler = (e) => {
        setSearchText(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
<<<<<<< HEAD
        //console.log(searchText);
    }
    useEffect(() => {
        //console.log(searchText);
        fetchAllMapAPI()
        .then((res) => {
                setBhcList(res.data);
            return res.data;
        })
        const filteredList = bhcList.filter((search) => {
=======
        console.log(searchText);
    }
    useEffect(() => {
        console.log(searchText);
        const filteredList = bhc_list.filter((search) => {
>>>>>>> d6b23528 (searchbar 드롭박스 구현)
            if (searchText === '' || searchText === null) {
                return search;
            } else {
                return search?.name?.includes(searchText);
            }});
            setSearchedList(filteredList)
    }, [searchText])

    return(
        <div style={{marginTop: '3rem'}}>
            <div style={{display: "flex", justifyContent: 'center'}}>
                <div>
                    <Input onChange={onSearchHandler} placeholder="주소를 검색하세요"></Input>
                    {searchText.length > 0 && searchText && (
                    <AutoSearchContainer>
                        <AutoSearchWrap>
                            {searchedList.map((search) => (
                                //<div>{search}</div>
                                <AutoSearchData
<<<<<<< HEAD
=======
                                    key={search.name}
>>>>>>> d6b23528 (searchbar 드롭박스 구현)
                                    onClick={() => {
                                        setSearchText(search.name);
                                    }}
                                >{search.name}</AutoSearchData>
                            ))}
                        </AutoSearchWrap>
                    </AutoSearchContainer>
                    )}
                </div>
                <Button onClick={onSubmitHandler}>검색</Button>
            </div>
            <div style={{display: "flex", justifyContent: 'center'}}>

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

const AutoSearchContainer = styled.div`
    width: 470px;
    height: auto;  
    margin-top: 20px;
    position: absolute;
    z-index: 3;

    border: 1px solid rgb(151,142,113);
    border-radius: 0.5rem;
    background-color: #fff;

    padding: 15px;
`

const AutoSearchWrap = styled.ul`

`;

const AutoSearchData = styled.li`
  padding: 10px 8px;
  width: 100%;
  height: 5px;
  font-size: 14px;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  position: relative;

`;