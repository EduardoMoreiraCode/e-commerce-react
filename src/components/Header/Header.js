import React from 'react'
import './Header.css'
import menuIcon from "../../assets/icons/menu-icon.png";
const Header = () => {
    return (
        <header className='header'>
            <div className='header-title'>ShoeStore</div>
            <div className='header-menu-icon'>
                <img src={menuIcon} alt='menu-icon'/>
            </div>
        </header>
    )
}

export default Header