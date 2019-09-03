// @flow
import React, { Component, useEffect, useState } from 'react';
import Footer from "./Footer";
import LeftDock from "./LeftDock";
import Editor from "./Editor";
import NavBar from "./NavBar";

export default class Home extends Component {
  state = { dark_theme: false };

  toggleDarkTheme = ( event ) => {
    this.setState({
      dark_theme: !this.state.dark_theme
    })
  };
  render() {
    return (
      <div className={`${(this.state.dark_theme ? 'dark' : 'light')}`} data-tid="container">
        <NavBar />
        <main>
          <LeftDock />
          <Editor />
        </main>
        <Footer
          toggleDarkTheme={this.toggleDarkTheme}
        />
      </div>
    );
  }
}
