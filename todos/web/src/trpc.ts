import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { type AppRouter } from 'todos-backend';
import type { EnvGetter} from 'todos-env';
import { todosEnvFromGetter, trpcPath } from 'todos-env';

export function trpc(envGetter: EnvGetter) {
  const env = todosEnvFromGetter(envGetter);
  const url =  `http://${env.backendHost()}:${env.backendPort()}${trpcPath}`;
  return createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        url: url,
      }),
    ],
  });
}