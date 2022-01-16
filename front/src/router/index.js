import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import CreateRoom from "../views/CreateRoom.vue";
import IndexRoom from "../views/IndexRoom.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
      { path: "/",      component: Home,  name: "Home" },
      { path: "/about", component: About, name: "About"},
      { path: "/signup", component: Signup, name: "Signup"},
      { path: "/signin", component: Signin, name: "Signin"},
      { path: "/rooms/new", component: CreateRoom, name: "CreateRoom"},
      { path: "/rooms", component: IndexRoom, name: "IndexRoom"},
  ]
});

export default router;
