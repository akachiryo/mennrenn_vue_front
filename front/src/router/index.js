import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Signup from "../components/Signup.vue";
import Signin from "../components/Signin.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: "/",      component: Home,  name: "Home" },
      { path: "/about", component: About, name: "About"},
      { path: "/signup", component: Signup, name: "Signup"},
      { path: "/signin", component: Signin, name: "Signin"},
  ]
});

export default router;
