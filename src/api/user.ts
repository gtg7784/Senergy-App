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
  userTokenAuthCreate: (data: FormData) => {
    const response = axios.post('/user/token/auth/', data);

    return response;
  },
  userTokenRefreshCreate: async (data: FormData) => {
    const token = await AsyncStorage.getItem('token');
    const response = axios.post('/user/token/refresh/', data, {
      headers: {
        Authorization: token,
      },
    });

    return response;
  },
  userReigisterCraete: (data: FormData) => {
    console.log('data', data);
    const response = axios.post('/user/register/', data);

    return response;
  },
  logout: () => {
    AsyncStorage.clear();
  },
};

export default user;
