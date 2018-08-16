import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class AccountScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello [username]</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};
