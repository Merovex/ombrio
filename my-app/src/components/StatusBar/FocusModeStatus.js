import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExpandWide,
  faCompress
} from '@fortawesome/pro-solid-svg-icons';
class FocusModeStatus extends Component {
  render() {
    var word = 'Expand';
    var icon = <FontAwesomeIcon icon={faExpandWide} />;
    return (
      <span class='save'>
        {icon}
        {word}
      </span>
    );
  }
}
export default FocusModeStatus;
