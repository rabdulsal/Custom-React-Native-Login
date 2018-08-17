/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Validator from 'validator';
import axios from 'axios';
import { Input, CustomButton } from '../components/CommonUI';
import configs from '../../configs';

const { ipAddress } = configs;

export default class CreateAccountScreen extends Component {
  state = {
    email: '',
    username: '',
    password: ''
  };

  handleChangeEmail = email => this.setState({ email })
  handleChangeUsername = username => this.setState({ username });
  handleChangePassword = password => this.setState({ password });

  handlePressedSignUpButton = () => {
    const { username, email, password } = this.state;
    if (Validator.isEmail(email) && username.trim() && password.trim()) {
      axios.post(`http://${ipAddress}:3000/user/register`, {
        email,
        password,
        username
      }).then(response => {
        if (response.status === 201) {
          this.props.navigator.pop();
        }
      })
      .catch((err) => {
        alert(err);
      });
    } else {
      alert('There was an error');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.signUpForm}>
          <Input
            placeholder="Email"
            value={this.state.email}
            onChangeText={this.handleChangeEmail}
          />
          <Input
            placeholder="Username"
            value={this.state.username}
            onChangeText={this.handleChangeUsername}
          />
          <Input
            secureTextEntry
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.handleChangePassword}
          />
        </View>
        <CustomButton
          text="Create Account"
          onPress={this.handlePressedSignUpButton}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center'
  },
  signUpForm: {
    height: 225,
    justifyContent: 'space-around'
  }
};
