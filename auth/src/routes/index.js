import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
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

export default router;
