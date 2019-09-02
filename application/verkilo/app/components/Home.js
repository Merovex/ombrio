// @flow
import React, { Component, useEffect, useState } from 'react';
import Footer from "./Footer";
import RightDock from "./RightDock";
import LeftDock from "./LeftDock";
import Editor from "./Editor";
import NavBar from "./NavBar";

export default class Home extends Component {
  state = { dark_theme: "" };

  toggleDarkTheme = ( event ) => {
    this.setState({
      dark_theme: !this.state.dark_theme
    })
  };
  render() {
    const dark_theme = this.state.dark_theme ? 'dark' : 'light';
    return (
      <div className={`${dark_theme}`} data-tid="container">
        <NavBar />
        <main>
          <LeftDock />
          <Editor />
          <RightDock />
        </main>
        <Footer
          toggleDarkTheme={this.toggleDarkTheme}
        />
      </div>
    );
  }
}
