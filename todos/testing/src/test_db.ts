import * as db from 'zapatos/db';
import { createDatabasePool } from 'todos-backend';
import { todosEnv } from 'todos-env-node';

const databasePool = createDatabasePool(todosEnv.databaseUrl());

(async () => {
  const allTodos = await db.select('todos', db.all).run(databasePool);
  console.log(allTodos);
  console.log(allTodos[0].description);
  await databasePool.end();
})();