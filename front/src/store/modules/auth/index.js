import axios from 'axios';

const state = {
  // currentUser: null,
  currentUser: {
    id: null,
    admin: null
  },
};

const getters = {
  currentUser(state) {
    return state.currentUser;
  },
};

const mutations = {
  SET_CURRENT_USER: (state, data) => {
    state.currentUser = data;
    localStorage.setItem('currentUser', JSON.stringify(data));
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${data.user.token}`;
    console.log(data.user.token);
    console.log(data.user);
    console.log(data);
  },
  CLEAR_CURRENT_USER: () => {
    state.currentUser = {
      id: null,
      admin: null
    };
    // localStorage.removeItem('currentUser');
    localStorage.setItem('currentUser', {
      id: null,
      admin: null
    });
  },
};

const actions = {
  async login({ commit }, sessionParams) {
    axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
    const res = await axios.post(
      `/api/v1/session`,
      sessionParams
    );
    commit('SET_CURRENT_USER', res.data);
  },

  logout({ commit }) {
    commit('CLEAR_CURRENT_USER');
  },
  async updateProfile({ commit, state }, userParams) {
    axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
    const res = await axios.patch(
      `/api/v1/me/account`,
      userParams
    );
    commit('SET_CURRENT_USER', {
      ...res.data,
      ...{ token: state.currentUser.token },
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
