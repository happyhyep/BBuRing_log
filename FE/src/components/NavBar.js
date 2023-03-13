import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <TopMenu>
                    <NavTextLogo to='/'>BBuRing_log</NavTextLogo>
                    <NavText to='/login'>Sign In</NavText>
                    <NavText to='/auth/register'>Sign Up</NavText>
            </TopMenu>
        </div>
    )
}

export default NavBar;

const TopMenu = styled.div`
    height: 10vh;
    display: flex;
    background-color: rgb(254,213,107);
    
    color: rgb(234,130,99);
`

const NavTextLogo = styled(NavLink)`
    display: flex;
    width:100%;
    max-width: 1600px;
    margin-left: 30px;
    align-items: center;
    justify-content: space-between;

    font-size: 25px;
    color: rgb(234,130,99);
    text-decoration: none;
`

const NavText = styled(NavLink)`
    margin-left: 0rem;
    margin-right: 2rem;
    min-width:70px;
    display: flex;
    align-items: center;

    font-size: 18px;
    color: rgb(234,130,99);
    text-decoration: none;
`