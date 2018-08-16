import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  AsyncStorage
} from 'react-native';
import axios from 'axios';
import {
  Input,
  TextButton,
  CustomButton
} from '../components/CommonUI';
import startAccount from './StartAccountScreen';
import configs from '../../configs';

const { ipAddress } = configs;
const PHONEBOOK_ICON = require('../../assets/images/phonebook_icon.png');

type Props = {};
export default class App extends Component<Props> {
  static navigatorStyle = {
    navBarHidden: true
  };
  state = {
    username: '',
    password: ''
  }

  handleChangeUsername = text => {
    this.setState(() => {
      return {
        username: text
      };
    });
  }

  handleChangePassword = text => {
    this.setState(() => {
      return {
        password: text
      };
    });
  }

  handlePushToCreateAccountScreen = () => {
    this.props.navigator.push({
      screen: 'Client.CreateAccountScreen',
      title: 'Sign Up'
    });
  }

  handleLogin = () => {
    const { username, password } = this.state;
    if (username && password) {
      axios.post(`http://${ipAddress}:3000/user/login`, {
        username,
        password
      }).then(response => {
        try {
          const { token } = response.headers['x-auth'];
          if (token) {
            AsyncStorage.setItem('x-auth', token)
            .then(() => {
              startAccount();
            }).catch(() => {
              alert('error')
            });
          }
        } catch (err) {
          alert('error');
        }
      }).catch((err) => {
        alert(err);
      });
    } else if (!username) {
      alert('Please provide a username!');
    } else {
      alert('Please provide a password!');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={PHONEBOOK_ICON}
          style={styles.img}
        />
        <View style={styles.formContainer}>
          <Input
            placeholder="Username"
            onChangeText={this.handleChangeUsername}
            value={this.state.username}
          />
          <Input
            placeholder="Password" secureTextEntry
            onChangeText={this.handleChangePassword}
            value={this.state.password}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            height: 150,
            justifyContent: 'space-around'
          }}
        >
          <CustomButton
            text="Sign In"
            onPress={this.handleLogin}
          />
          <TextButton
            onPress={this.handlePushToCreateAccountScreen}
            text="Sign Up"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)'
  },
  formContainer: {
    height: 150,
    justifyContent: 'space-around',
  },
  img: {
    height: 100,
    width: 100,
    marginTop: '35%',
    marginBottom: '25%'
  }
});
