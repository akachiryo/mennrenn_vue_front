import axios from 'axios'
const state = {
    currentUser: null
};

const getters = {
  currentUser(state) {
    return state.currentUser
  }
}

const mutations = {
    SET_CURRENT_USER: (state, user, data) => {
        state.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(data))
        axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`
        
    },
    CLEAR_CURRENT_USER: () => {
        state.currentUser = null
        localStorage.removeItem('currentUser')
        location.reload()
    }
};

const actions = {
    async login({ commit }, sessionParams) {
        const res = await axios.post(`http://localhost:3000/api/session`, sessionParams)
        commit("SET_CURRENT_USER", res.data.user, res.data);
      },
      
      logout({ commit }) {
        commit("CLEAR_CURRENT_USER");
      },
      async updateProfile({ commit, state }, userParams) {
        const res = await axios.patch(`http://localhost:3000/api/me/account`, userParams)
        commit("SET_CURRENT_USER", { ...res.data, ...{ token: state.currentUser.token } });
        
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};