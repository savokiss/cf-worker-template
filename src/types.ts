import { WorkerDB } from './services';

export type Bindings = {
  D1_DB: D1Database;
  db: WorkerDB;
};

export type Variables = {
  token: string;
};

export type HonoType = {
  Bindings: Bindings;
  Variables: Variables;
};