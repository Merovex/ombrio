import React, { Component } from 'react';

export default class Dock extends Component {
  constructor(props){
    super(props);
    this.className='tray';
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  state = { visible: true };
  toggleVisibility = ( event ) => {
    this.setState({
      visible: !this.state.visible
    })
  };
}
