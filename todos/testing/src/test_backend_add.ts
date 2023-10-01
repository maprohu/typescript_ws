import { trpc } from './trpc';

(async () => {
  const todo = await trpc.addTodo.mutate({
    description: 'haha',
  });
  console.log(todo);
})();