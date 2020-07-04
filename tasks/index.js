import { registerRootComponent } from 'expo';
import {AppRegistry} from 'react-native'
import Auth from './src/screens/Auth';
import Navigator from './src/Navigator'
import {name as appName} from './app.json'

registerRootComponent(Navigator);
// AppRegistry.registerComponent(appName, () => Auth)
