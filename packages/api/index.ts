import { createHTTPServer } from "@trpc/server/adapters/standalone";
import cors from "cors";
import { appRouter } from "./appRouter";
import { PrismaClient } from "./prisma/client";

const port = 3050;
const prisma = new PrismaClient();

createHTTPServer({
  middleware: cors(),
  router: appRouter,
  createContext() {
    return {
      prisma,
    };
  },
}).listen(port);
