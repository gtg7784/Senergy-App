import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../components/Container';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLUE,
  },
});
interface Props {}

const SettingScreen: React.FC<Props> = () => {
  return <Container style={styles.container} />;
};

export default SettingScreen;
