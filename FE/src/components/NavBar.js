import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <TopMenu>
                    <div><NavLink to='/'>Home</NavLink></div>
                    <div><NavLink to='/login'>login</NavLink></div>
            </TopMenu>
        </div>
    )
}

export default NavBar;

const TopMenu = styled.div`
    height: 10vh;
    display: flex;
    background-color: #E9AC06;
    align-items: center;
    justify-content: space-between;
`

