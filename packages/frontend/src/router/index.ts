import MetricsView from "@/views/MetricsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "metrics",
      component: MetricsView,
    },
  ],
});

export default router;
