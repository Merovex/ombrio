import React, { Component } from 'react';

export default class NavBar extends Component {

  render() {
    return (
      <nav>
        <div>
          <ul>
            <li>Home</li>
            <li>View / Group Mode</li>
            <li>Compile</li>
          </ul>
        </div>
        <div className="search">
          Search: <input type='text' />
        </div>
      </nav>
    );
  }
}
