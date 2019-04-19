import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faTachometerAltFast
} from '@fortawesome/pro-solid-svg-icons';
class SessionProgress extends Component {
  render() {
    var time = "000:50";
    var wph  = "0000";
    return (
      <div>
        <span>Session:</span>
        <span>{time}<FontAwesomeIcon icon={faClock} /></span>
        <span>{wph} wph<FontAwesomeIcon icon={faTachometerAltFast} /></span>
      </div>
    );
  }
}
export default SessionProgress;
