import { login, logout, fetchUserInfos } from '../api';

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
  },
  actions: {
    async init(context) {
      const user = await fetchUserInfos();
      context.commit('storeUser', user);
      context.commit('setLoginState', !!user);
      return;
    },
    async registerLogin(context, body) {
      const { session, userInfos } = await login(body);
      context.commit('setLoginState', session.extra_secret);
      context.commit('storeUser', userInfos);
    },
    async registerLogout(context, body) {
      const session = await logout(body);
      session;
      // const user = await fetchUserInfos();
    },
  },
};
