import React from 'react'
import "./Menu.css"

function Menu ({isVisible, onClose}) {
//e quando clica no menu em si, ele some, por isso o onClose
  return ( //se o icone for clicado, isVisible será true logo o menu estara visivel
    <div className={`menu-screen ${isVisible ? 'visible' : ''}`} onClick={onClose}>
        <div className='menu-content'>
    
            <a href='localhost:3000'>
                <span className='droplist'>Home</span>
            </a>
            <a href='localhost:3000'>
                <span className='droplist'>Destaques</span>
            </a>
            <a href='localhost:3000'>
                <span className='droplist'>Sobre</span>
            </a>
            <a href='localhost:3000'>
                <span className='droplist'>Contato</span>
            </a>
        
        </div>

    </div>
  )
}

export default Menu