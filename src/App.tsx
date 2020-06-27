import React from 'react';
import {StatusBar} from 'react-native';
import OneSignal from 'react-native-onesignal';
import {oneSignalId} from 'react-native-dotenv';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';

type MainParamList = {
  LoginScreen: undefined;
};

enum MainConst {
  LoginScreen = 'LoginScreen',
}

declare const global: {HermesInternal: null | {}};

const MainStack = createStackNavigator<MainParamList>();

class App extends React.Component {
  componentDidMount() {
    // OSNotificationDisplayTypeNone = 0
    // OSNotificationDisplayTypeInAppAlert = 1
    // OSNotificationDisplayTypeNotification = 2
    OneSignal.init(oneSignalId, {kOSSettingsKeyAutoPrompt: true});
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
            <MainStack.Screen
              name={MainConst.LoginScreen}
              component={LoginScreen}
            />
          </MainStack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
