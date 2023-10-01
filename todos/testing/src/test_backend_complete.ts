import { trpc } from './trpc';

(async () => {
  const todo = await trpc.setTodoCompleted.mutate({
    id: 1,
    complete: true,
  });
  console.log(todo);
})();