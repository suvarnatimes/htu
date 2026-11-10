import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

const url = process.env.TURSO_DATABASE_URL || 'libsql://htu-htuindia.aws-ap-southeast-1.turso.io';
const authToken = process.env.TURSO_AUTH_TOKEN || '';

export const client = createClient({
  url,
  authToken,
});

export const db = drizzle(client, { schema });
