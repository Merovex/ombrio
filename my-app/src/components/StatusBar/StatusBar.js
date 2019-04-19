import React, { Component } from 'react';
import WordCount from './WordCount';
import SaveStatus from './SaveStatus';
import FocusModeStatus from './FocusModeStatus';
import SessionProgress from './SessionProgress';

class StatusBar extends Component {
  render() {
    return (
        <footer>
          <WordCount />
          <SessionProgress />
          <div>&nbsp;</div>
          <div>
            &nbsp;
          </div>
          <div className='align-right'>
            <FocusModeStatus />
            <SaveStatus />
          </div>
        </footer>
    );
  }
}

export default StatusBar;
