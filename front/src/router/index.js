import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: "/",      component: Home,  name: "Home" },
      { path: "/about", component: About, name: "About"},
      { path: "/signup", component: Signup, name: "Signup"},
      { path: "/signin", component: Signin, name: "Signin"},
  ]
});

// const routes = [
//   { path: "/",      component: Home,  name: "Home" },
//   { path: "/about", component: About, name: "About"},
//   { path: "/signup", component: Signup, name: "Signup"}
// ];

// const router = new VueRouter({
//   routes,
// });

export default router;
