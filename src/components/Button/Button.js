import React from 'react';
import './Button.css';

const Button = ({ children }) => {
  return (
    <div className='button'>

        <a href='localhost:3000'>
            <div className='text-button'>
                {children}
            </div>
        </a>
    
    </div>
  )
}

export default Button