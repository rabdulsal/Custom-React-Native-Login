import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';
import {
  Input,
  TextButton,
  CustomButton
} from '../components/CommonUI';

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
