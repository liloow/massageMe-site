import {login, logout, fetchUserInfos} from '../api';

export default {
  state: {
    LOGGED_IN: false,
    USER_INFOS: {},
  },
  getters: {
    getUser(state) {
      return state.USER_INFOS;
    },
    getLoggedInStatus(state) {
      return state.LOGGED_IN;
    },
  },
  mutations: {
    storeUser(state, user) {
      state.USER_INFOS = user;
    },
    setLoginState(state, extra) {
      state.LOGGED_IN = Boolean(extra);
    },
    cleanLoginState(state) {
      state.LOGGED_IN = false;
      state.USER_INFOS = {};
    },
  },
  actions: {
    async init(context) {
      const userInfos = JSON.parse(localStorage.getItem('user') || sessionStorage.getItem('user'));
      console.log(userInfos);
      const user = await fetchUserInfos();
      context.commit('storeUser', user);
      context.commit('setLoginState', !!user);
      return;
    },
    async registerLogin(context, body) {
      const {session, userInfos} = await login(body);
      context.commit('setLoginState', session.extra_secret);
      context.commit('storeUser', userInfos);
      console.log(body, body.persist);
      if (body.persist) {
        window.localStorage.setItem('user', JSON.stringify(userInfos));
      } else {
        window.localStorage.removeItem('user', JSON.stringify(userInfos));
        window.sessionStorage.addItem('user', JSON.stringify(userInfos));
      }
    },
    async registerLogout(context, body) {
      await logout(body);
      const user = await fetchUserInfos();
      window.localStorage.setItem('user', JSON.stringify(user));
      context.commit('cleanLoginState');
    },
  },
};
