// @flow
import React, { Component, useEffect, useState } from 'react';
import Footer from "./Footer";
import RightTray from "./RightTray";
import LeftTray from "./LeftTray";
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
          <header>Page Title</header>
          <LeftTray />
          <Editor />
          <RightTray />
        </main>
        <Footer toggleDarkTheme={this.toggleDarkTheme} />
      </div>
    );
  }
}
