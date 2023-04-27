import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from './logo192.png';

const NavBar = () => {
    const signOut = () => {
        localStorage.clear();
        window.location.replace('/')
    }
    return (
        <div className='NavBar'>
            <TopMenu>
                    <NavTextLogo to='/'><img alt="chicken" src='https://cdn-icons-png.flaticon.com/512/776/776924.png' style={{width: '2rem', opacity: '0.7'}}></img>BBuRing_log</NavTextLogo>
                    {localStorage.getItem('id') == null ? 
                        <NavText to='/login'>Sign In</NavText>
                    :  (<NavText onClick={signOut}>Logout</NavText>)
                    }
                    {localStorage.getItem('id') == null ? 
                    <NavText to='/auth/register'>Sign Up</NavText>
                    : <NavText to='/user/info'>My Info</NavText>
                    }
            </TopMenu>
        </div>
    )
}

export default NavBar;

const TopMenu = styled.div`
    height: 10vh;
    display: flex;
    background-color: rgb(252,214,131);
    width: 100%;
    color: rgb(234,130,99);
`

const NavTextLogo = styled(NavLink)`
    display: flex;
    width:100%;
    max-width: 1600px;
    margin-left: 30px;
    align-items: center;

    font-size: 25px;
    font-family: UhBeeZZIBA-Regular;
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
    font-family: UhBeeZZIBA-Regular;
    color: rgb(234,130,99);
    text-decoration: none;
`