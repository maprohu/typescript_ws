import { publicProcedure, router } from './trpc';
import * as db from 'zapatos/db';
import { createDatabasePool } from './pg_pool';
import { todosEnv } from 'todos-env-node';
import { z } from 'zod';

const databasePool = createDatabasePool(todosEnv.databaseUrl());

export const appRouter = router({
  listTodos: publicProcedure.query(async (_) => {
    return await db.select(
      'todos', 
      db.all,
      {
        order: { by: 'id', direction: 'ASC', }, 
      },
      ).run(databasePool);
  }),
  addTodo: publicProcedure.input(
    z.object({
      description: z.string(),
    }),
  ).mutation(async (opts) => {
    const { input } = opts;
    return await db.insert('todos', input).run(databasePool);
  }),
  setTodoCompleted: publicProcedure.input(
    z.object({
      id: z.number(),
      complete: z.boolean(),
    })
  ).mutation(async (opts) => {
    const { input } = opts;
    return await db.update(
      'todos',
      { complete: input.complete, },
      { id: input.id, },
    ).run(databasePool);
  }),
  deleteTodo: publicProcedure.input(
    z.object({
      id: z.number(),
    })
  ).mutation(async (opts) => {
    const { input } = opts;
    return await db.deletes('todos', input).run(databasePool);
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
