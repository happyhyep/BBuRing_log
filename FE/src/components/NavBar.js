import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <TopMenu>
                    <NavText to='/'>BBuRing_log</NavText>
                    <NavText to='/login' style={{fontSize:'20px'}}>login</NavText>
            </TopMenu>
        </div>
    )
}

export default NavBar;

const TopMenu = styled.div`
    height: 10vh;
    display: flex;
    background-color: rgb(254,213,107);
    align-items: center;
    justify-content: space-between;

    color: rgb(234,130,99);
`

const NavText = styled(NavLink)`
    margin-left: 2rem;
    margin-right: 2rem;

    font-size: 25px;
    color: rgb(234,130,99);
    text-decoration: none;
`
