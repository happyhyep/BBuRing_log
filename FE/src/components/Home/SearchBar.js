import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { addMyLocation, fetchAllMapAPI } from "../../store/MapSearch";
import axios from "axios";
import {motion} from 'framer-motion';

function SearchBar() {
    const [searchText, setSearchText] = useState('')
    const [searchedList, setSearchedList] = useState([]);
    const [bhcList, setBhcList] = useState([]);
    const [locationX, setLocationX] = useState([]);
    const [locationY, setLocationY] = useState([]);

    const onSearchHandler = (e) => {
        setSearchText(e.currentTarget.value);
    }
    const onSubmitHandler = (e) => {
        //console.log(searchText);
        addMyLocation(localStorage.getItem('id'),locationX, locationY);
    }
    useEffect(() => {
        //console.log(searchText);
        fetchAllMapAPI()
        .then((res) => {
                setBhcList(res.data);
            return res.data;
        })
        const filteredList = bhcList.filter((search) => {
            if (searchText === '' || searchText === null) {
                return search;
            } else {
                return search?.name?.includes(searchText);
            }});
            setSearchedList(filteredList)
    }, [searchText])

    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          ease: [0.71, 0.71, 0.2, 1.01]}} >
            <div style={{marginTop: '3rem'}}>
                <div style={{display: "flex", justifyContent: 'center'}}>
                    <div>
                        <Input onChange={onSearchHandler} placeholder="주소를 검색하세요" ></Input>
                        {searchText.length > 0 && searchText && (
                        <AutoSearchContainer>
                            <AutoSearchWrap>
                                {searchedList.map((search) => (
                                    //<div>{search}</div>
                                    <AutoSearchData
                                        onClick={() => {
                                            setSearchText(search.name);
                                            setLocationX(search.x);
                                            setLocationY(search.y);
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
            </motion.div>
        
    )

}

export default SearchBar;

const Input = styled.input`
    width: 500px;
    height: 30px;
    padding-left: 10px;
    border-radius: 0.5rem;
    border: 1px solid rgb(151,142,113);
    font-family: LINESeedRg;
    transition: width .35s linear; 
`

const Button = styled.button`
    width: 50px;
    height: 30px;
    border-radius: 1rem;
    border: 1px solid rgb(151,142,113);
    background-color: rgb(254,213,107);

    margin-left: 1rem;

    font-family: LINESeedRg;
    font-size: 13px;
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
  font-family: LINESeedRg;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  position: relative;

`;