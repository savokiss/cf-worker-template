import { Hono } from "hono";
import { logger } from "hono/logger";
import { WorkerDB } from './services';
import { HonoType } from './types';

const app = new Hono<HonoType>();

app.use("*", logger());

app.use((ctx, next) => {
  if (!ctx.env.db) {
    ctx.env.db = new WorkerDB(ctx.env.D1_DB);
  }
  return next();
});

app.get("/", (c) => c.text("Hello Hono!"));

export default app;
