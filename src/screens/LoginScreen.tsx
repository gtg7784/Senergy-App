import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import LoginModal from '../components/LoginModal';
import colors from '../constants/colors';
import images from '../constants/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLUE,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 1,
    color: '#ffffff',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: '#ffffff',
  },
  illust: {
    width: 260,
    height: 170,
    marginTop: 80,
  },
  button: {
    width: 295,
    height: 55,
    borderRadius: 14,
    backgroundColor: colors.YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 102,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
  },
  bottomWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  bottomText: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.WHITE,
  },
  bottomBtnText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.YELLOW,
  },
});

const LoginScreen = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>SENERGY</Text>
          <Text style={styles.subTitle}>하루 5초, 24시간을 유용하게</Text>
          <Image style={styles.illust} source={images.mainIllust} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsModal(true)}>
            <Text style={styles.buttonText}>로그인</Text>
          </TouchableOpacity>
          <View style={styles.bottomWrap}>
            <Text style={styles.bottomText}>
              아직 시너지를 사용하고 있지 않으신가요?
            </Text>
            <TouchableHighlight>
              <Text style={styles.bottomBtnText}>가입하기</Text>
            </TouchableHighlight>
          </View>
        </SafeAreaView>
      </View>
      <LoginModal
        isVisible={isModal}
        changeValue={() => setIsModal(!isModal)}
      />
    </>
  );
};

export default LoginScreen;
