import { Navigation } from 'react-native-navigation';
import AuthScreen from './screens/AuthScreen';
import CreateAccountScreen from './screens/CreateAccountScreen';

Navigation.registerComponent('Client.AuthScreen', () => AuthScreen);
Navigation.registerComponent('Client.CreateAccountScreen', () => CreateAccountScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Client.AuthScreen'
  }
});
