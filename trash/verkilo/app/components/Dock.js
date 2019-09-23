import React, { Component } from 'react';

export default class Dock extends Component {
  constructor(props){
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.getClassName = this.getClassName.bind(this);
    this.getButtonClassName = this.getButtonClassName.bind(this);
  }
  state = { opened: true };
  toggleVisibility = ( event ) => {
    this.setState({
      opened: !this.state.opened
    })
  };
  getClassName = () => {
    return (((this.state.opened) ? "dock" : "dock closed") );
  }
  getButtonClassName = (o="fa-angle-left",c="fa-angle-right") => {
    return( "fas " + (this.state.opened ? o : c) );
  }
}
