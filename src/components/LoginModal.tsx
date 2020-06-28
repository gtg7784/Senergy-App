import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Dimensions,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Modal from 'react-native-modal';

import Input from './Input';
import Button from './Button';
import colors from '../constants/colors';

interface Props {
  navigation: StackNavigationProp<MainParamList, 'LoginScreen'>;
  isVisible: boolean;
  changeValue: () => void;
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    width: '100%',
    height: 424,
    backgroundColor: colors.WHITE,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 40,
    alignItems: 'center',
  },
  forgetPwBtn: {
    marginBottom: 26,
  },
  forgetPwWrap: {
    width: Dimensions.get('window').width - 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  forgetPw: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
  },
  registerWrap: {
    width: Dimensions.get('window').width - 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  registerText: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
    marginLeft: 6,
  },
  registerLabel: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.YELLOW,
  },
});

const LoginModal: React.FC<Props> = (props: Props) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const onRouteRegister = () => {
    props.changeValue();
    props.navigation.navigate('RegisterScreen');
  };

  const onLogin = () => {};

  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={() => props.changeValue()}
      swipeDirection="down"
      onSwipeComplete={() => props.changeValue()}
      style={styles.modal}>
      <View style={styles.container}>
        <Input label="아이디" value={id} onChange={setId} marginBottom={26} />
        <Input
          label="비밀번호"
          value={pw}
          onChange={setPw}
          marginBottom={10}
          password
        />
        <View style={styles.forgetPwWrap}>
          <TouchableHighlight style={styles.forgetPwBtn}>
            <Text style={styles.forgetPw}>비밀번호를 잊으셨나요?</Text>
          </TouchableHighlight>
        </View>
        <Button label="로그인" onPress={() => onLogin()} />
        <View style={styles.registerWrap}>
          <Text style={styles.registerText}>
            아직 시너지를 사용하고 있지 않으신가요?
          </Text>
          <TouchableHighlight
            underlayColor={colors.TRANSPARENT}
            onPress={() => onRouteRegister()}>
            <Text style={styles.registerLabel}>가입하기</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default LoginModal;
