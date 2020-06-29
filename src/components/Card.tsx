import React from 'react';
import {StyleSheet, View, ViewProps} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowOpacity: 0.1,
  },
});

const Card: React.FC<ViewProps> = (props) => {
  const realStyles = StyleSheet.flatten([styles.container, props.style]);
  return <View style={realStyles} children={props.children} />;
};

export default Card;
