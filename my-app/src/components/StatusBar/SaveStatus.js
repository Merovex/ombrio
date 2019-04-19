import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSave,
  faSatelliteDish
} from '@fortawesome/pro-solid-svg-icons';
class SaveStatus extends Component {
  render() {
    var word = 'Saved';
    var icon = <FontAwesomeIcon icon={faSave} />;
    return (
      <span class='save'>
        {icon}&nbsp;
        {word}
      </span>
    );
  }
}
export default SaveStatus;
