import React from 'react';
import {StatusBar} from 'react-native';
import OneSignal from 'react-native-onesignal';
import {oneSignalId} from 'react-native-dotenv';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MainScreen from './screens/MainScreen';
import DetailScreen from './screens/DetailScreen';
import SettingScreen from './screens/SettingScreen';

declare const global: {HermesInternal: null | {}};

const MainStack = createStackNavigator<MainParamList>();

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    axios.defaults.baseURL =
      'http://ec2-52-78-109-103.ap-northeast-2.compute.amazonaws.com:8000/';
    axios.defaults.timeout = 10000;
    axios.defaults.headers.common.Accept = '*/*';
  }
  componentDidMount() {
    // OSNotificationDisplayTypeNone = 0
    // OSNotificationDisplayTypeInAppAlert = 1
    // OSNotificationDisplayTypeNotification = 2
    OneSignal.init(oneSignalId, {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });
    OneSignal.inFocusDisplaying(2);

    console.log('INIT ONESIGNAL');

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    console.log('UNINIT ONESIGNAL');
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification: any) {
    console.log('Notification received: ', notification);
  }

  onOpened = (openResult: any) => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);

    let data = openResult.notification.payload.additionalData;
    console.log(data);
  };

  onIds(device: any) {
    console.log('Device info: ', device);
    // 사용자 정보에 푸시 토큰 업데이트
  }

  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <MainStack.Navigator headerMode={'none'}>
            <MainStack.Screen name={'LoginScreen'} component={LoginScreen} />
            <MainStack.Screen
              name={'RegisterScreen'}
              component={RegisterScreen}
            />
            <MainStack.Screen name={'MainScreen'} component={MainScreen} />
            <MainStack.Screen name={'DetailScreen'} component={DetailScreen} />
            <MainStack.Screen
              name={'SettingScreen'}
              component={SettingScreen}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
