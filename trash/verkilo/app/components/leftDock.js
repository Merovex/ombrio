import React, { Component } from 'react';
import Dock from "./Dock";

export default class LeftDock extends Dock {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <aside className={this.getClassName()}>
        <header>
          <h4>Binder</h4>
        </header>
        <section>
          <ul>
            <li>Project Name</li>
            <ul>
              <li>Manuscript</li>
              <ul>
                <li>Section Name</li>
                <li>Section Name</li>
                <li><input type="text" value="Page Title" /></li>
                <li>Section Name</li>
                <li>Sub-Section Name</li>
                <ul>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                </ul>
                <li>Section Name</li>
                <li>Section Name</li>
                <li>Section Name</li>
              </ul>
            </ul>
            <ul>
              <li>Notebook</li>
              <ul>
                <li>Section Name</li>
                <li>Section Name</li>
                <li>Section Name</li>
                <li>Section Name</li>
                <li>Section Name</li>
                <li>Section Name</li>
                <li>Section Name</li>
                <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
                  <li>Section Name</li>
              </ul>
            </ul>
          </ul>
        </section>
          <footer>
            <button className='toggle' onClick={this.toggleVisibility}>
              <i className={ this.getButtonClassName() }></i>
            </button>
          </footer>
      </aside>
    );
  }
}
// <div class='thing'>
//   <ul>
//     <li>Project Name</li>
//     <ul>
//       <li>Manuscript</li>
//       <ul>
//         <li>Section Name</li>
//         <li>Section Name</li>
//         <li><input type="text" value="Page Title" /></li>
//         <li>Section Name</li>
//         <li>Sub-Section Name</li>
//         <ul>
//           <li>Section Name</li>
//           <li>Section Name</li>
//           <li>Section Name</li>
//           <li>Section Name</li>
//           <li>Section Name</li>
//           <li>Section Name</li>
//           <li>Section Name</li>
//           <li>Section Name</li>
//         </ul>
//         <li>Section Name</li>
//         <li>Section Name</li>
//         <li>Section Name</li>
//       </ul>
//     </ul>
//     <ul>
//       <li>Notebook</li>
//       <ul>
//         <li>Section Name</li>
//         <li>Section Name</li>
//         <li>Section Name</li>
//         <li>Section Name</li>
//         <li>Section Name</li>
//         <li>Section Name</li>
//         <li>Section Name</li>
//         <li>Section Name</li>
//       </ul>
//     </ul>
//   </ul>
// </div>
// <div className='footer'>
//   <button className='toggle' onClick={this.toggleVisibility}>
//     <i className={
//         "fas " + (this.state.opened ? "fa-angle-right" : "fa-angle-left")
//       }></i>
//   </button>
// </div>
