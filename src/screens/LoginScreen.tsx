import React from 'react';
import {StyleSheet, SafeAreaView, Text, View} from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLUE,
  },
});

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>SENERGY</Text>
        <Text>하루 5초, 24시간을 유용하게</Text>
      </SafeAreaView>
    </View>
  );
};

export default LoginScreen;
