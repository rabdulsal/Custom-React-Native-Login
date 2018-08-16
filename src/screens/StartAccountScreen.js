import { Navigation } from 'react-native-navigation';

const startAccountScreen = () => {
  return Navigation.startSingleScreenApp({
    screen: {
      screen: 'Client.AccountScreen',
      title: 'Welcome to <username>\'s Profile!'
    }
  });
};

export default startAccountScreen;
