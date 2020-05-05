import React from 'react';
import './Header.css'
import Nav from './Nav/Nav'
import MainView from './MainView/MainView'
const Header = () =>(
    <div className="Header">
        <MainView/>
    
        <Nav/>
    </div>
)


export default Header;