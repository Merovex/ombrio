//@ts-check 
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-solid-svg-icons'

class Binder extends Component {
  render() {
    return (
      <nav className="Binder">
        <div className="BinderLogo footer">
          <h2><FontAwesomeIcon icon={faBars} />&nbsp;Project</h2>
        </div>
        <div className='BinderList'>
          <h4>Frontmatter</h4>
            <ul>
              <li>Sidebar</li>
              <li>ipsum lorem</li>
              <li>ipsum lorem</li>
              <li>ipsum lorem</li>
            </ul>
          <h4>Mainmatter</h4>
          <ul>
            <li>Sidebar</li>
            <li>ipsum lorem</li>
              <ul><li>ipsum lorem</li>
              <li>ipsum lorem</li>
              <li>ipsum lorem</li></ul>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
            <li>ipsum lorem</li>
          </ul>
          <h4>Backmatter</h4>
            <ul>
              <li>ipsum lorem</li>
              <li>ipsum lorem</li>
              <li>ipsum lorem</li>
              <li>ipsum lorem</li>
            </ul>
          <h4>Documents</h4>
            <ul>
              <li>ipsum lorem</li>
              <li>ipsum lorem</li>
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
