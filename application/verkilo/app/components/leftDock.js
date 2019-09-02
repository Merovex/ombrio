import React, { Component } from 'react';
import Dock from "./Dock";

export default class LeftDock extends Dock {
  constructor(props){
    super(props);
    this.className = 'binder';
  }
  render() {
    const v = (this.state.visible) ? "show" : "hide";
    const class_name = this.className + " " + v;
    return (
      <aside className={class_name}>
        <div class='thing'>
        <h4>Binder</h4>
          <ul>
            <li>Page Title</li>
            <li>Page Title</li>
            <li>Page Title</li>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
              <li>Page Title</li>
              <li>Page Title</li>
            </ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Page Title</li>
            <li>Page Title</li>
            <li>Page Title</li>
            <li>Page Title</li>
            <li>Page Title</li>
            <li>Page Title</li>
              <li><input type="text" value="Page Title" /></li>
              <li>Page Title</li>
              <li>Page Title</li>
              <ul>
                <li><input type="text" value="Page Title" /></li>
                <li>Page Title</li>
                <li>Page Title</li>
              </ul>
              <li>Page Title</li>
              <li>Page Title</li>
              <li>Page Title</li>
              <li>Page Title</li>
              <li>Page Title</li>
              <li>Page Title</li>
              <li>Page Title</li>
              </ul>
              <h4>Research</h4>
              <ul>
                <li>Page Title</li>
                <li>Page Title</li>
                <li>Page Title</li>
                <ul>
                  <li>Page Title</li>
                  <li>Page Title</li>
                  <li>Page Title</li>
                </ul>
                <li>Page Title</li>
                <li>Page Title</li>
                <li>Page Title</li>
                <li>Page Title</li>
                <li>Page Title</li>
                <li>Page Title</li>
                <li>Page Title</li>
          </ul>
        </div>
        <div className='footer'>
          <button onClick={this.toggleVisibility}>>></button>
        </div>
      </aside>
    );
  }
}
