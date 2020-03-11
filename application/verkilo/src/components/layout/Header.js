import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
  return(
    <header className="header" data-testid="header" >
      <nav>
        <div className="logo">
          <img src="/images/verkilo-logo-full-1.png" alt="Verkilo" ></img>
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li><FaPizzaSlice /></li>
          </ul>
        </div>
      </nav>
      <p>Hello there</p>
    </header>
  )
}