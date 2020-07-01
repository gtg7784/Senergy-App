import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import ImagePicker from 'react-native-image-picker';

import Container from '../components/Container';
import Input from '../components/Input';
import CheckList from '../components/CheckList';
import DropDown from '../components/Dropdown';
import Button from '../components/Button';
import colors from '../constants/colors';
import images from '../constants/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLUE,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 208,
    paddingHorizontal: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.WHITE,
  },
  headerBtn: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcn: {
    width: 20,
    height: 18,
  },
  bodySection: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: colors.WHITE,
    paddingTop: 40,
  },
  rowWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 26,
  },
  goLoginText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.BLACK,
    marginRight: 6,
  },
  goLoginBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    color: colors.YELLOW,
  },
});

interface Props {
  navigation: StackNavigationProp<MainParamList, 'RegisterScreen'>;
}

const options = {
  title: '프로필 사진을 선택하세요',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const RegisterScreen: React.FC<Props> = ({navigation}: Props) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [weight, setWeight] = useState('');
  const [selectedIndex, setIndex] = useState(0);
  const [meridiem, setMeridiem] = useState('오전');
  const [time, setTime] = useState('1');
  const [profile, setProfile] = useState('');

  const onClickProfile = async () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const uri = response.uri;

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setProfile(uri);
      }
    });
  };

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <Container style={styles.container}>
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>
            반가워요!{'\n'}
            정보를 입력해주세요
          </Text>
          <TouchableOpacity
            style={styles.headerBtn}
            onPress={() => onClickProfile()}>
            <Image source={images.cameraIcon} style={styles.headerIcn} />
          </TouchableOpacity>
        </View>
        <View style={styles.bodySection}>
          <Input
            label="이름"
            value={name}
            onChange={setName}
            marginBottom={26}
          />
          <Input label="아이디" value={id} onChange={setId} marginBottom={26} />
          <Input
            label="비밀번호"
            value={pw}
            onChange={setPw}
            marginBottom={26}
            password
          />
          <Input
            label="몸무게 (단위 : KG)"
            value={weight}
            onChange={setWeight}
            marginBottom={26}
          />
          <CheckList
            label="평소 몇시간 주무시나요?"
            arr={[3, 4, 5, 6, 7, 8, 9]}
            selectedIndex={selectedIndex}
            setIndex={setIndex}
            marginBottom={26}
          />
          <DropDown
            label="평소 몇시에 주무시나요?"
            item={[
              {
                value: meridiem,
                setValue: setMeridiem,
                array: [
                  {
                    label: '오전',
                    value: 'AM',
                  },
                  {
                    label: '오후',
                    value: 'PM',
                  },
                ],
              },
              {
                value: time,
                setValue: setTime,
                array: [
                  {label: '1시', value: '1'},
                  {label: '2시', value: '2'},
                  {label: '3시', value: '3'},
                  {label: '4시', value: '4'},
                  {label: '5시', value: '5'},
                  {label: '6시', value: '6'},
                  {label: '7시', value: '7'},
                  {label: '8시', value: '8'},
                  {label: '9시', value: '9'},
                  {label: '10시', value: '10'},
                  {label: '11시', value: '11'},
                  {label: '12시', value: '12'},
                ],
              },
            ]}
          />
          <View style={styles.rowWrap}>
            <Button label="가입하기" onPress={() => {}} />
          </View>
          <View style={styles.rowWrap}>
            <Text style={styles.goLoginText}>이미 계정이 있으신가요?</Text>
            <TouchableHighlight
              onPress={() => navigation.goBack()}
              underlayColor={colors.TRANSPARENT}>
              <Text style={styles.goLoginBtnText}>로그인하기</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

export default RegisterScreen;
