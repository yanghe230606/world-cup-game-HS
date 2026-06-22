import { pgTable, varchar, integer, timestamp } from 'drizzle-orm/pg-core'

export const teamSupport = pgTable('team_support', {
  id:        varchar('id', { length: 64 }).primaryKey(),   // team id, e.g. "37_Argentina"
  name:      varchar('name', { length: 128 }).notNull(),
  support:   integer('support').notNull().default(0),
  goals:     integer('goals').notNull().default(0),
  votes:     integer('votes').notNull().default(0),
  updatedAt: timestamp('updated_at').defaultNow(),
})
