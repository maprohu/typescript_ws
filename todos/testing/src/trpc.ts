
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from 'todos-backend';
import { todosEnv } from 'todos-env-node';
import { trpcPath } from 'todos-env';

const backendUrl = `http://localhost:${todosEnv.backendPort()}${trpcPath}`;
console.log("backend url: ", backendUrl);

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: backendUrl,
    }),
  ],
});
