import React from 'react';
import { TextInput, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const Input = (props) => {
  state = {};

  return (
    <TextInput
      style={styles.textInput}
      {...props}
    />
  );
};

const styles = {
  textInput: {
    width: 0.9 * width,
    height: 0.08 * height,
    backgroundColor: 'rgb(242,242,242)',
    borderRadius: 30,
    paddingLeft: '3%',
    color: 'rgb(188,188,188)',
    fontSize: 18
  }
};

export { Input };
