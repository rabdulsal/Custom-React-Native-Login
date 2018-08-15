import React from 'react';
import {
  TouchableOpacity,
  Text
} from 'react-native';
import PennColors from './PennColors';

const TextButton = (props) => {
  return (
      <TouchableOpacity {...props}>
        <Text style={styles.textButton}>{props.text}</Text>
      </TouchableOpacity>
  );
};

const styles = {
  textButton: {
    color: PennColors.blue,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: PennColors.blue,
    fontSize: 17
  }
};

export { TextButton };
