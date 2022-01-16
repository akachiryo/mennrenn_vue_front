import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from './store'
import router from "./router";
import dayjs from "dayjs";
import VueLoading from 'vue-loading-template'

Vue.config.productionTip = false;

dayjs.locale("ja");
Vue.prototype.$dayjs = dayjs;

new Vue({
  vuetify,
  router,
  store,
  VueLoading,
  created() {
      const userString = localStorage.getItem('currentUser')
      if (userString) {
          const userData = JSON.parse(userString)
          this.$store.commit('auth/SET_CURRENT_USER', userData)
      }
    },
  render: (h) => h(App),
}).$mount("#app");
