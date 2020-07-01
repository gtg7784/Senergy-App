import axios from 'axios';

const user = {
  userList: () => {
    const response = axios.get('/user');

    return response;
  },
  userPartialUpdate: (data: FormData) => {
    const response = axios.patch('/user', data);

    return response;
  },
  userTokenAuthCreate: (data: FormData) => {
    const response = axios.post('/user/token/auth/', data);

    return response;
  },
  user_token_refresh_create: (data: FormData) => {
    const response = axios.post('/user/token/refresh/', data);

    return response;
  },
};

export default user;
