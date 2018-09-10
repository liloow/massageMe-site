import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/',
  withCredentials: true,
  responseType: 'json',
});

export const signup = async userInfo => (await api.post('/signup', userInfo)).data; //.then(r => r.data);
export const login = async body => (await api.post('/login', body)).data; //.then(r => r.data);
export const logout = async () => (await api.post('/logout')).data; //.then(r => r.data);
export const prebook = async (therapistId, fullDate) =>
  (await api.post('/prebook', {therapistId, fullDate})).data; //.then(r => r.data);

export const fetchUserInfos = async () => (await api.get('/fetchUserInfos')).data; //.then(r => r.data);

export const appendToUserHistory = async state => api.post(`/bookingPostProcessing`, state).data;

export const fetchTherapists = async () => await api.get('/getTherapists'); //.then(r => r.data);

export const createPayment = async data => await api.post('/createPayment', data); //.then(r => r.data);

export const storePaymentAttempt = async data => await api.post('/storePaymentAttempt', data); //.then(r => r.data);

export const fetchPayment = async id => await api.get('/fetchPayment', {params: {id}}); //.then(r => r.data);

export const getPaymentStatus = async id => await api.post('/getPaymentStatus', {id}); //.then(r => r.data);

export const fetchSlotsAvailable = async raw =>
  await api.get('/getSlotsAvailable', {params: {raw}}); //.then(r => r.data);

export const fetchMassages = async () => await api.get('/getMassages'); //.then(r => r.data);

export const fetchMassage = id => api.get(`/data/massage/${id}`); //.then(r => r.data);

export const fetchMasseuse = id => api.get(`/data/masseuse/${id}`); //.then(r => r.data);

export const fetchCities = () => api.get(`/data/cities`); //.then(r => r.data);
