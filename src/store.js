import Vue from 'vue';
import Vuex from 'vuex';
import booking from '@/Store/bookingStore';
import data from '@/Store/dataStore';
import users from '@/Store/usersStore';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export function createStore() {
  return new Vuex.Store({
    modules: {
      booking,
      users,
      data,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
  });
}
