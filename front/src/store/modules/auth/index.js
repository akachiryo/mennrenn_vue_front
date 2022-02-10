import axios from 'axios';

// const getDefaultState = () => {
//   return {
//     currentUser: null,
//   }
// };

// const state = getDefaultState()
const state = {
  currentUser: null,
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
    state.currentUser = null;
    // Object.assign(state, getDefaultState())
    localStorage.removeItem('currentUser');
    // location.reload();
  },
};

const actions = {
  async login({ commit }, sessionParams) {
    axios.defaults.baseURL = process.env.VUE_APP_API_ENDPOINT;
    const res = await axios.post(
      // `http://localhost:3000/api/session`,
      `/api/session`,
      sessionParams
    );
    commit('SET_CURRENT_USER', res.data);
  },

  logout({ commit }) {
    commit('CLEAR_CURRENT_USER');
  },
  async updateProfile({ commit, state }, userParams) {
    const res = await axios.patch(
      `http://localhost:3000/api/me/account`,
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
