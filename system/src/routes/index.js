import * as VueRouter from "vue-router";

import Home from "@/views/Home/index";
import About from "@/views/About/index";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
