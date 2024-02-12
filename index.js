/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './store';

const Wrapper = () => (
    <Provider store={store} >
        <App />
    </Provider>
);

AppRegistry.registerComponent(appName, () => Wrapper);
