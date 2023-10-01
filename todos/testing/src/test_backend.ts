import { trpc } from './trpc';

(async () => {
  const todos = await trpc.listTodos.query();
  console.log(todos[0].id);
  console.log(todos);
})();