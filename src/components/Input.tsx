import React from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 30,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0,
    color: colors.BLACK,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: colors.GRAY,
    height: 46,
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0,
    color: colors.BLACK,
    paddingHorizontal: 20,
  },
});

interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  password?: boolean;
  marginBottom?: number;
}

const Input: React.FC<Props> = ({
  label = '',
  onChangeText,
  value,
  password = false,
  marginBottom = 0,
}: Props) => {
  return (
    <View style={[styles.container, {marginBottom: marginBottom}]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        secureTextEntry={password}
      />
    </View>
  );
};

export default Input;
