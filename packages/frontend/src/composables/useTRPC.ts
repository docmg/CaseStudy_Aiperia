import { createTRPCVueQueryClient } from "@falcondev-oss/trpc-vue-query";
import type { AppRouter } from "api/appRouter";
import { inject } from "vue";

export function useTRPC() {
  return inject("trpc") as ReturnType<
    typeof createTRPCVueQueryClient<AppRouter>
  >;
}
