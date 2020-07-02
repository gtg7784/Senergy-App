import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const user = {
  userList: async () => {
    const token = await AsyncStorage.getItem('token');
    const response = axios.get('/user', {
      headers: {
        Authorization: token,
      },
    });

    return response;
  },
  userPartialUpdate: async (data: FormData) => {
    const token = await AsyncStorage.getItem('token');
    const response = axios.patch('/user', data, {
      headers: {
        Authorization: token,
      },
    });

    return response;
  },
  userTokenAuthCreate: async (data: FormData) => {
    const token = await AsyncStorage.getItem('token');
    const response = axios.post('/user/token/auth/', data, {
      headers: {
        Authorization: token,
      },
    });

    return response;
  },
  user_token_refresh_create: async (data: FormData) => {
    const token = await AsyncStorage.getItem('token');
    const response = axios.post('/user/token/refresh/', data, {
      headers: {
        Authorization: token,
      },
    });

    return response;
  },
};

export default user;
