import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { InferModel } from 'drizzle-orm';

export const users = sqliteTable('users', {
  id: integer('id').primaryKey(),
  username: text('username'),
  password: text('password'),
  email: text('email'),
  created_at: text('created_at'),
  updated_at: text('updated_at'),
  is_delete: integer('is_delete'),
});

export type User = InferModel<typeof users>;