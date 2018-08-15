/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Input, CustomButton } from '../components/CommonUI';
import Validator from 'validator';

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
    const email = this.props.email;
    if (!Validator.isEmail(email)) {
      alert('You need a valid email to sign up');
    }
    this.setState({ email });
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
