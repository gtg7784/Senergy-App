import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Dimensions} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 60,
    height: 56,
    borderRadius: 14,
    backgroundColor: colors.YELLOW,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.BLACK,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0,
  },
});
interface Props {
  label: string;
  onPress: () => void;
}

const Button: React.FC<Props> = (props: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.onPress()}>
      <Text style={styles.text}>{props.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
