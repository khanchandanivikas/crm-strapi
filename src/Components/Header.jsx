import React from 'react'
import Logo from '../images/Logo.png'
import './Style/Header.css';

const Header = () => {
    return (
        <div className="head">
            <img src={Logo} alt="logo" height="70px"/>
        </div>
    )
}

export default Header
