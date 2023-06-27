import { eq } from 'drizzle-orm';
import { DrizzleD1Database } from 'drizzle-orm/d1';
import { users, User } from '../db/schemas/users';

export class Users {
  orm: DrizzleD1Database;

  constructor(orm: DrizzleD1Database) {
    this.orm = orm;
  }

  async get (id: number) {
    const result = await this.orm.select().from(users).where(eq(users.id, id)).get();
    return result;
  }

  async getAll () {
    const results = await this.orm.select().from(users).all();
    return results;
  }

  async create(data: Partial<User>) {
    const result = await this.orm.insert(users).values(data).run();
    return result;
  }

  async update(id: number, data: Partial<User>) {
    const result = await this.orm.update(users).set(data).where(eq(users.id, id)).run();
    return result;
  }

  async delete(id: number) {
    const result = await this.orm.delete(users).where(eq(users.id, id)).run();
    return result;
  }
}