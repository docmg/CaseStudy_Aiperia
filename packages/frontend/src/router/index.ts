import DashboardView from "@/views/DashboardView.vue";
import MetricsView from "@/views/MetricsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/metrics",
      name: "metrics",
      component: MetricsView,
    },
  ],
});

export default router;
