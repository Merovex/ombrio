import React, { Component } from 'react';

export default class Footer extends Component {
  // state = { dark_theme: "" };

  render() {
    // const dark_theme = this.state.dark_theme ? 'dark' : 'light';
    return (
      <footer className='site-footer'>
        <div>
          Dark Mode
          <form onChange={this.props.toggleDarkTheme}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round" />
            </label>
          </form>
        </div>
        <div className="wordcounts">
          <span className="section">1,500</span> /
          <span className="document"> 120,000</span> words
        </div>
        <div className="state">#First Draft</div>
        <div className="mode">Focus</div>
        <div className="zoom">Zoom</div>
        <div className="sync">Sync</div>
      </footer>
    );
  }
}
