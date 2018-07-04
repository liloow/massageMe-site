import { login, logout } from '../api';

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
    setLoginState(state, session) {
      state.LOGGED_IN = Boolean(session.extra_secret);
    },
  },
  actions: {
    async init() {
      // context.commit('storeUser', user);
    },
    async registerLogin(context, body) {
      const { session, userInfos } = await login(body);
      context.commit('setLoginState', session);
      context.commit('storeUser', userInfos);
    },
    async registerLogout(context, body) {
      const session = await logout(body);
      session;
      // const user = await fetchUserInfos();
    },
  },
};
