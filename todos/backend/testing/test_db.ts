/// <reference path="../../orm/src/zapatos/schema.d.ts" />

import * as db from 'zapatos/db';
import databasePool from '../src/pg_pool';

(async () => {
  const allTodos = await db.select('todos', db.all).run(databasePool);
  console.log(allTodos);
  await databasePool.end();
})();