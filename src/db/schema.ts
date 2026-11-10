import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const certificates = sqliteTable('certificates', {
  id: text('id').primaryKey(), // e.g. "HTU01/2021"
  certNo: text('cert_no').notNull().unique(),
  name: text('name').notNull(),
  surname: text('surname'),
  fullName: text('full_name').notNull(),
  address: text('address'),
  degree: text('degree').notNull(),
  category: text('category').notNull(),
  date: text('date').notNull(),
  place: text('place').notNull(),
  imageUrl: text('image_url'),
  status: text('status').default('Conferred & Active'),
  chancellor: text('chancellor').default('Dr. Davidpaul Arjilli'),
  synod: text('synod').default("Cathedral Episcopal Synod Bishop's Council"),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(strftime('%s', 'now'))`)
});

export type Certificate = typeof certificates.$inferSelect;
export type NewCertificate = typeof certificates.$inferInsert;
