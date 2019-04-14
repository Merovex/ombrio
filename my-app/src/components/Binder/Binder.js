import React, { Component } from 'react';
import './Binder.css';

class Binder extends Component {
  render() {
    return (
      <nav className="Binder">
        <div className="BinderLogo footer"><h1>Ombrio</h1></div>
        <div className='BinderList'>
          <h4>Manuscript</h4>
          <ul>
            <li>Sidebar</li>
            <li>ipsum loremD</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>Sidebar</li>
            <li>ipsum loremD</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>Sidebar</li>
            <li>ipsum loremD</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
          </ul>
          <h4>Documents</h4>
            <ul>
              <li>Sidebar</li>
              <li>ipsum loremD</li>
              <li>ipsum lorem</li>
              <li>ipsum lorem</li>
              <li>ipsum lorem</li>
              <li>ipsum lorem</li>
            </ul>
        </div>
      </nav>
    );
  }
}

export default Binder;
