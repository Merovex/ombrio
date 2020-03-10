import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

class Drawer extends Component {
  render() {
    return (
      <aside className="Drawer">
        <div className="DrawerLogo footer">
          <h2><FontAwesomeIcon icon={faBars} />&nbsp;Drawer</h2>
        </div>
        <ul>
          <li>Drawer</li>
          <li>ipsum lorem</li>
          <li>ipsum lorem</li>
          <li>ipsum lorem</li>
          <li>ipsum lorem</li>
          <li>ipsum lorem</li>
        </ul>
      </aside>
    );
  }
}

export default Drawer;
