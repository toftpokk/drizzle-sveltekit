import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/server/schema.ts',
	out: './drizzle',
	driver: 'turso',
	dialect: "sqlite",
	dbCredentials: {
		url: process.env.DATABASE_URL ? process.env.DATABASE_URL : "file:./dev.db"
	}
} satisfies Config;
