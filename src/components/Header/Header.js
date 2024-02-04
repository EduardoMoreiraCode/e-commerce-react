import React, { useState } from 'react'
import './Header.css'
import menuIcon from "../../assets/icons/menu-icon.png";
import closeMenu from "../../assets/icons/when-menu-is-open-icon.png";
import Menu from '../Menu/Menu';
const Header = () => {
    const [isMenuIconClicked, setMenuIconClicked] = useState(false);

    const trocarIcon = () => {
        // para inverter o estado, inverto o valor da prev
        setMenuIconClicked((estado) => {
            return !estado;
        });
      };

    const fecharMenu = () => {
        setMenuIconClicked(false);
    };

    console.log(setMenuIconClicked)
    
    return (
        <div>
            <header className='header'>
            <div className='header-title'>ShoeStore</div>
            <div className='header-menu-icon'>
                <img onClick={trocarIcon} id='menu-icon' src={isMenuIconClicked ? closeMenu : menuIcon} alt='menu-icon'/>
            </div>
        </header>
        <Menu isVisible={isMenuIconClicked} onClose={fecharMenu} />
        </div>
    )

}

export default Header