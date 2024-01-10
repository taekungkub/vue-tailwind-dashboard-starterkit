import { createWebHistory, createRouter } from "vue-router";
import Login from "./Views/Login.vue";


const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: () => import("./components/HelloWorld.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: "empty" },
  },

  {
    path: "/components/buttons",
    name: "Buttons",
    component: () => import("./Views/Components/Buttons.vue"),
  },

  {
    path: "/components/modals",
    name: "Modals",
    component: () => import("./Views/Components/Modals.vue"),
  },
  {
    path: "/components/tables",
    name: "Tables",
    component: () => import("./Views/Components/Tables.vue"),
  },
  {
    path: "/components/accordion",
    name: "Accordion",
    component: () => import("./Views/Components/Accordion.vue"),
  },


  {
    path: "/form",
    name: "Form",
    component: () => import("./Views/Form.vue"),
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
