import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/auth"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("@/views/auth/login"),
      },
      {
        path: "registry",
        name: "registry",
        component: () => import("@/views/auth/registry"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(async (to, from) => {
  const token = localStorage.getItem("token");
  if (!token && to.name !== "login" && to.name !== "registry")
    return { name: "login", query: { name: from.name } };
});

export default router;
