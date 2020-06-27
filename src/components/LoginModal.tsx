import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';

import Input from './Input';
import Button from './Button';
import colors from '../constants/colors';

interface Props {
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
  flexRowWrap: {
    width: Dimensions.get('window').width - 60,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  forgetPw: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
  },
  notUsingYet: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
  },
  registerText: {
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

  const onLogin = () => {};
  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={() => props.changeValue()}
      swipeDirection="down"
      onSwipeComplete={() => props.changeValue()}
      style={styles.modal}>
      <View style={styles.container}>
        <Input
          label="아이디"
          value={id}
          onChangeText={setId}
          marginBottom={26}
        />
        <Input
          label="비밀번호"
          value={pw}
          onChangeText={setPw}
          marginBottom={10}
          password
        />
        <View style={styles.flexRowWrap}>
          <TouchableHighlight style={styles.forgetPwBtn}>
            <Text style={styles.forgetPw}>비밀번호를 잊으셨나요?</Text>
          </TouchableHighlight>
        </View>
        <Button label="로그인" onPress={() => onLogin()} />
        <View style={[styles.flexRowWrap, {marginTop: 30}]}>
          <Text style={styles.notUsingYet}>
            아직 시너지를 사용하고 있지 않으신가요?
          </Text>
          <TouchableHighlight>
            <Text style={styles.registerText}>가입하기</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default LoginModal;
