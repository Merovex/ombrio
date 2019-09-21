# How to Render Native, Desktop, Web

https://github.com/benoitvallon/react-native-nw-react-calculator/blob/master/src/common/components/AppRender.js

| File | Type | Comment |
| --- | --- | --- |
| Screen.js | View | Web & Desktop, uses CSS|
| Screen.android.js | View | Calls Screen.native.js|
| Screen.io.js | View | Calls Screen.native.js|
| Screen.native.js | View | Provides code for Android & iOS.|
| ScreenBase.js | Component | Provides the logic |
