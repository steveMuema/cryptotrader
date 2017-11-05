import { AppRegistry } from 'react-native';
import App from './android/src/App';
require('react-native-browser-polyfill');
// import configureStore from './android/src/store/configureStore';
global.self=global;
AppRegistry.registerComponent('cryptotrader', () => App);
