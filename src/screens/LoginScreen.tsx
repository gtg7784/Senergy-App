import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Container from '../components/Container';
import Button from '../components/Button';
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
    color: colors.WHITE,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.WHITE,
  },
  illust: {
    width: 260,
    height: 170,
    marginTop: 80,
    marginBottom: 102,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
  },
  bottomWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    marginTop: 40,
  },
  bottomText: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.WHITE,
    marginRight: 6,
  },
  bottomBtnText: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.YELLOW,
  },
});

interface Props {
  navigation: StackNavigationProp<MainParamList, 'LoginScreen'>;
}

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const [isModal, setIsModal] = useState(false);

  const onRouteRegister = () => {
    setIsModal(false);
    navigation.navigate('RegisterScreen');
  };

  return (
    <>
      <Container style={styles.container}>
        <Text style={styles.title}>SENERGY</Text>
        <Text style={styles.subTitle}>하루 5초, 24시간을 유용하게</Text>
        <Image style={styles.illust} source={images.mainIllust} />
        <Button label="로그인" onPress={() => setIsModal(true)} />
        <View style={styles.bottomWrap}>
          <Text style={styles.bottomText}>
            아직 시너지를 사용하고 있지 않으신가요?
          </Text>
          <TouchableHighlight
            underlayColor={colors.TRANSPARENT}
            onPress={() => onRouteRegister()}>
            <Text style={styles.bottomBtnText}>가입하기</Text>
          </TouchableHighlight>
        </View>
      </Container>
      <LoginModal
        navigation={navigation}
        isVisible={isModal}
        changeValue={() => setIsModal(!isModal)}
      />
    </>
  );
};

export default LoginScreen;
