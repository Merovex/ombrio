# How to Render Native, Desktop, Web

https://github.com/benoitvallon/react-native-nw-react-calculator/blob/master/src/common/components/AppRender.js

## Entry Point

* Separate `index.web.html` & `index.desktop.html`
* `electron.js` for Electron bootstrap
*

## Application

|          File           |      Type     |         Comment              |
| ----------------------- | ------------- | ---------------------------- |
| Screen.js               | Component-ish | Joins the Base to the Render |
| ScreenBase.js           | Component     | Provides the logic           |
| ScreenRender.android.js | View          | Calls ScreenRender.native.js |
| ScreenRender.io.js      | View          | Calls ScreenRender.native.js |
| ScreenRender.native.js  | View          | Provides code for Android & iOS.|
| ScreenRender.js         | View          | Web & Desktop  |

### Screen

```
'use strict';

import Base from './ScreenBase';
import Render from './ScreenRender';

export default class Screen extends Base {
  constructor (props) {
    super(props);
  }

  render () {
    return Render.call(this, this.props, this.state);
  }
}
```

### Screen Render

```
'use strict';

import React from 'react';

export default function (props, state) {
  return (
    <div className='screen'>
      {state.displayScreen}
    </div>
  );
}
```

### ScreenRender Android / iOS

```
'use strict';

import Render from './ScreenRender.native';

export default function () {
  return Render.call(this, this.props, this.state);
}
```

### Screen Render Native

```
'use strict';

import React, {
  StyleSheet,
  Text
} from 'react-native';

export default function (props, state) {
  return (
    <Text style={styles.screen}>
      {state.displayScreen}
    </Text>
  );
}

var styles = StyleSheet.create({
  screen: {
    color: '#190d08',
    fontSize: 70,
    fontWeight: '200'
  }
});
```

### Screen Base

```
'use strict';

import { Component } from 'react';
import CalculatorStore from '../stores/CalculatorStore';

function getCalculatorState() {
  return {
    displayScreen: CalculatorStore.getDisplayScreen()
  };
}

class Screen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayScreen: CalculatorStore.getDisplayScreen()
    };

    // Bind callback methods to make `this` the correct context.
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    CalculatorStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    CalculatorStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getCalculatorState());
  }
}

module.exports = Screen;
```
