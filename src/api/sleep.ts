import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const sleep = {
  sleepList: async () => {
    const token = await AsyncStorage.getItem('token');
    const response = axios.get('/sleep', {
      headers: {
        Authorization: token,
      },
    });

    return response;
  },
  sleepCreate: async () => {
    const token = await AsyncStorage.getItem('token');
    const response = axios.post('/sleep', {
      headers: {
        Authorization: token,
      },
    });

    return response;
  },
  sleep_read: async (id: number) => {
    const token = await AsyncStorage.getItem('token');
    const response = axios.get(`/sleep/${id}`, {
      headers: {
        Authorization: token,
      },
    });

    return response;
  },
};

export default sleep;
