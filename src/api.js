import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/',
});

export const signup = userInfo => api.post('/signup', userInfo).then(r => r.data);

export const login = body => api.post('/login', body).then(r => r.data);

export const fetchUserInfos = () => api.get('/fetchUserInfos').then(r => r.data);

// function saveUserInfo({ token, user }) {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   localStorage.setItem('token', token);
//   localStorage.setItem('user', JSON.stringify(user));
// }

// export function logout(vm) {
//   localStorage.removeItem('token');
//   localStorage.removeItem('user')
//   vm.user = null;
//   delete axios.defaults.headers.common['Authorization'];
// }

// export function checkUser(vm) {
//   const token = localStorage.getItem('token');
//   const userInfo = localStorage.getItem('user');
//   if (token && userInfo) {
//     const user = JSON.parse(userInfo);
//     saveUserInfo({
//       token,
//       user,
//     });
//     vm.user = user;
//   } else {
//     vm.user = null
//   }
// }

// export function appendToUserHistory(user, res) { return api.post(`${user}/append/`).then(response => { return response.data; }) }

export const getTherapists = () => api.get('/data/therapists').then(r => r.data);

export const getMassages = () => api.get('/data/massages').then(r => r.data);

export const getMassage = id => api.get(`/data/massage/${id}`).then(r => r.data);

export const getMasseuse = id => api.get(`/data/masseuse/${id}`).then(r => r.data);

export const getCities = () => api.get(`/data/cities`).then(r => r.data);
