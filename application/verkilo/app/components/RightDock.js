import React from 'react';
import Dock from "./Dock";

export default class RightDock extends Dock {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <aside className={this.getClassName()}>
        <header>
          <h4>Synopsis</h4>
        </header>
        <section>
          <div>
            <h5>Page Title</h5>
            <textarea>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit. Hac habitasse platea dictumst vestibulum rhoncus. Lacus vestibulum sed arcu non odio euismod lacinia at. Praesent tristique magna sit amet purus gravida quis blandit turpis. Egestas congue quisque egestas diam in arcu cursus euismod quis. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Nibh praesent tristique magna sit amet purus gravida quis. Amet cursus sit amet dictum sit amet justo. Et magnis dis parturient montes nascetur.
            </textarea>
          </div>
          <div>
            <h4>Metadata</h4>
            <table>
              <tr><th>Created:</th><td> April 1, 2019 at 8:24pm</td></tr>
              <tr><th>Updated:</th><td> July 1, 2019 at 11:44am</td></tr>
              <tr><th>Status:</th><td> First Draft</td></tr>
            </table>
          </div>
          <div>
            <h4>Tags / Keywords</h4>
            <ul>
              <li><span className='label'>Bophendze</span></li>
              <li><span className='label'>Space station</span></li>
              <li><input type="text" /></li>
            </ul>
          </div>
          <div>
            <h4>Notes</h4>
            <textarea>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit. Hac habitasse platea dictumst vestibulum rhoncus. Lacus vestibulum sed arcu non odio euismod lacinia at. Praesent tristique magna sit amet purus gravida quis blandit turpis. Egestas congue quisque egestas diam in arcu cursus euismod quis. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Nibh praesent tristique magna sit amet purus gravida quis. Amet cursus sit amet dictum sit amet justo. Et magnis dis parturient montes nascetur.</textarea>
          </div>
        </section>
        <footer>
          <button className='toggle' onClick={this.toggleVisibility}>
            <i className={ this.getButtonClassName("fa-angle-left","fa-angle-right") }></i>
          </button>
        </footer>
      </aside>
    );
  }
}
// <div class='thing'>
//   <div>
//     <h4>Synopsis</h4>
//     <h5>Page Title</h5>
//     <textarea>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit. Hac habitasse platea dictumst vestibulum rhoncus. Lacus vestibulum sed arcu non odio euismod lacinia at. Praesent tristique magna sit amet purus gravida quis blandit turpis. Egestas congue quisque egestas diam in arcu cursus euismod quis. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Nibh praesent tristique magna sit amet purus gravida quis. Amet cursus sit amet dictum sit amet justo. Et magnis dis parturient montes nascetur.
//     </textarea>
//   </div>
//   <div>
//     <h4>Metadata</h4>
//     <table>
//       <tr><th>Created:</th><td> April 1, 2019 at 8:24pm</td></tr>
//       <tr><th>Updated:</th><td> July 1, 2019 at 11:44am</td></tr>
//       <tr><th>Status:</th><td> First Draft</td></tr>
//     </table>
//   </div>
//   <div>
//     <h4>Keywords</h4>
//     <ul>
//       <li><span className='label'>Bophendze</span></li>
//       <li><span className='label'>Space station</span></li>
//       <li><input type="text" /></li>
//     </ul>
//   </div>
//   <div>
//     <h4>Notes</h4>
//     <textarea>
//     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl pretium fusce id velit. Hac habitasse platea dictumst vestibulum rhoncus. Lacus vestibulum sed arcu non odio euismod lacinia at. Praesent tristique magna sit amet purus gravida quis blandit turpis. Egestas congue quisque egestas diam in arcu cursus euismod quis. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Nibh praesent tristique magna sit amet purus gravida quis. Amet cursus sit amet dictum sit amet justo. Et magnis dis parturient montes nascetur.</textarea>
//   </div>
// </div>
// <div className="footer">
//   <button onClick={this.toggleVisibility}>&lt;&lt;</button>
// </div>
