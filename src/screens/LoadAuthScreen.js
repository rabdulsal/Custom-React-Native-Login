import { Navigation } from 'react-native-navigation';

const loadAuthScreen = () => {
  return Navigation.startSingleScreenApp({
    screen: {
      screen: 'Client.AuthScreen'
    }
  });
};

export default loadAuthScreen;
