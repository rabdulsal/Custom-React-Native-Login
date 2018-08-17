import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import loadAuthScreen from './LoadAuthScreen';
import PennColors from '../components/CommonUI/PennColors';

export default class AccountScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }
  state = { };

  handleLogout = () => {
    AsyncStorage.removeItem('x-auth')
    .then(() => {
      return loadAuthScreen();
    }).catch(() => {
      return loadAuthScreen();
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Hello [username]</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.handleLogout}
        >
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: PennColors.reallyDarkBlue
  },
  buttonContainer: {
    height: '8%',
    width: '90%',
    backgroundColor: PennColors.blue,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 34,
    color: 'white'
  },
  message: {
    color: 'white',
    fontSize: 43,
    marginBottom: '20%',
    marginTop: '15%'
  }
};
