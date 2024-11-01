import { initTRPC } from "@trpc/server";
import { createRouter } from "./trpc/routers";

export const t = initTRPC.create();
export const appRouter = createRouter(t.router, t.procedure);
export type AppRouter = typeof appRouter;
