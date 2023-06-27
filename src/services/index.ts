import { drizzle, DrizzleD1Database } from 'drizzle-orm/d1';
import { Users } from './users';

export class WorkerDB {
  orm: DrizzleD1Database;
  users: Users;

  constructor(db: D1Database) {
    this.orm = drizzle(db, { logger: true });
    this.users = new Users(this.orm);
  }
}