import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExpandWide,
  faCompress,
  faSave,
  faClock,
  faSatelliteDish,
  faTachometerAltFast
} from '@fortawesome/pro-solid-svg-icons'

class StatusBar extends Component {
  render() {
    return (
        <footer>
          <div>
            <span class='wordcount'>123 / 298765 words</span>
            <span class='pages'>1 / 300 pages</span>
          </div>
          <div>Session:&nbsp;
            <span><FontAwesomeIcon icon={faClock} />&nbsp;00:50</span>
            <span><FontAwesomeIcon icon={faTachometerAltFast} />&nbsp;00&nbsp;wph</span>
          </div>
          <div>&nbsp;</div>
          <div>
            <span class='focus align-right'>
              <FontAwesomeIcon icon={faExpandWide} />&nbsp;
              Focus&nbsp;
              <FontAwesomeIcon icon={faCompress} />&nbsp;
              Compress
            </span>
          </div>
          <div className='align-right'>
            <span class='save'>
              <FontAwesomeIcon icon={faSatelliteDish} />&nbsp;
              Saving&nbsp;
              <FontAwesomeIcon icon={faSave} />&nbsp;
              Saved
            </span>
          </div>
        </footer>
    );
  }
}

export default StatusBar;
