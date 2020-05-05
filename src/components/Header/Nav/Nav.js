import React from 'react'
import './Nav.css'
import NavList from './NavList/NavList'
import NavButton from './NavButton/NavButton'
import logo from '../../../icon/main_logo.svg'
const Nav = () => {

    return (
        <div className="Nav">
            <img className="Nav__logo"src={logo} alt=""/>
            <NavList/>
            <NavButton/>
        </div>
    )

}

export default Nav;