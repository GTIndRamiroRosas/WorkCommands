import { createRouter, createWebHistory } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HeaderComponent,
    },
  ],
});

export default router;
