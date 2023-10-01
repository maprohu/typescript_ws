import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, routeAction$, Form, zod$, z } from "@builder.io/qwik-city";
import { trpc } from "~/trpc";


export const useTodosList = routeLoader$(async (requestEvent) => {
  return await trpc(requestEvent.env).listTodos.query();
});

export default component$(() => {
  const todosListSignal = useTodosList();
  const addTodoAction = useAddTodoAction();
  const deleteTodoAction = useDeleteTodoAction();
  const completeTodoAction = useCompleteTodoAction();
  return (
    <div>
      <Form action={addTodoAction}>
        <input name="description"></input>
        <button>Add</button>
      </Form>
      {
        todosListSignal.value.map((todo) => {
          return <div key={todo.id}>
            <input
              type="checkbox" 
              checked={todo.complete}
              onChange$={async () => {
                await completeTodoAction.submit({ 
                  id: todo.id,
                  complete: !todo.complete,
                });
              }}
            />
            <span>{todo.description}</span>
            <button onClick$={async () => {
              await deleteTodoAction.submit({ id: todo.id });
            }}>Delete</button>
          </div>
        })
      }
    </div>
  );
});

export const head: DocumentHead = {
  title: "Todos",
};

export const useAddTodoAction = routeAction$(
  async (props, requestEvent) => {
    console.log('addTodo', props);
    return await trpc(requestEvent.env).addTodo.mutate(props);
  },
  zod$({
    description: z.string(),
  }),
);
export const useDeleteTodoAction = routeAction$(
  async (props, requestEvent) => {
    console.log(props);
    return await trpc(requestEvent.env).deleteTodo.mutate(props);
  },
  zod$({
    id: z.number(),
  }),
);
export const useCompleteTodoAction = routeAction$(
  async (props, requestEvent) => {
    console.log(props);
    return await trpc(requestEvent.env).setTodoCompleted.mutate(props);
  },
  zod$({
    id: z.number(),
    complete: z.boolean(),
  }),
);