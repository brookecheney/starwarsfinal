import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Characters from "./views/Characters.vue";
import Planets from "./views/Planets.vue";
import Contact from "./views/Contact.vue";
import Color from "./views/Color.vue";



Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/characters",
      name: "characters",
      component: Characters
    },
    {
      path: "/planets",
      name: "planets",
      component: Planets
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/color",
      name: "color",
      component: Color
    },
  ]
});
