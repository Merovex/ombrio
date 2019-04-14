import React, { Component } from 'react';
import Binder from './components/Binder/Binder';
import Drawer from './components/Drawer/Drawer';
import StatusBar from './components/StatusBar/StatusBar';
import Editor from './components/Editor/Editor';
import Header from './components/Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App dark">
        <Binder />
        <div className='main'>
          <Header />
          <div>Ipsum Lorem
            <Editor />
          </div>
          <Drawer />
          <StatusBar />
      </div>
      </div>
    );
  }
}

export default App;
