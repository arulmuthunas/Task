/**
 * @format
 */

 import {AppRegistry} from 'react-native';
 import ReduxWrapper from './src/ReduxWrapper'
 import {name as appName} from './app.json';
 
 AppRegistry.registerComponent(appName, () => ReduxWrapper);