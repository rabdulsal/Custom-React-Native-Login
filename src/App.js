import { Navigation } from 'react-native-navigation';
import { AsyncStorage } from 'react-native';
import axios from 'axios';
import AuthScreen from './screens/AuthScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';
import AccountScreen from './screens/AccountScreen';
import configs from '../configs';
import startAccount from './screens/StartAccountScreen';

const { ipAddress } = configs;

Navigation.registerComponent('Client.AuthScreen', () => AuthScreen);
Navigation.registerComponent('Client.CreateAccountScreen', () => CreateAccountScreen);
Navigation.registerComponent('Client.AccountScreen', () => AccountScreen);

AsyncStorage.getItem('x-auth').then((token) => {
  axios.get(`http://${ipAddress}:3000/private/private`, {
    headers: {
      'x-auth': token
    }
  }).then((response) => {
    if (response.status === 200) {
      return startAccount();
    }
    return Navigation.startSingleScreenApp({
      screen: {
        screen: 'Client.AuthScreen'
      }
    });
  }).catch(() => {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'Client.AuthScreen'
      }
    });
  });
}).catch(() => {

});

// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'Client.AuthScreen'
//   }
// });
