import React, { Component } from 'react';
import { TouchableOpacity, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const CustomButton = (props) => {
  state = {};
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonContainer: {
    height: height * 0.08,
    width: width * 0.9,
    backgroundColor: 'rgb(78,171,230)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
  }
};

export { CustomButton };
