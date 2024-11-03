import { createTRPCVueQueryClient } from "@falcondev-oss/trpc-vue-query";
import { VueQueryPlugin, useQueryClient } from "@tanstack/vue-query";
import { httpBatchLink } from "@trpc/client";
import { createApp } from "vue";
import type { AppRouter } from "api/appRouter";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

// VueQuery
app.use(VueQueryPlugin);
app.use({
  install(app) {
    const queryClient = app.runWithContext(useQueryClient);
    const trpc = createTRPCVueQueryClient<AppRouter>({
      queryClient,
      trpc: {
        links: [
          httpBatchLink({
            url: "http://localhost:3050/",
          }),
        ],
      },
    });

    app.provide("trpc", trpc);
  },
});

// Router
app.use(router);

app.mount("#app");
