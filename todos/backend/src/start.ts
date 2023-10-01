import { appRouter } from './server';
import Koa from "koa";
import { createKoaMiddleware } from 'trpc-koa-adapter';
import { todosEnv } from 'todos-env-node';
import { trpcPath } from 'todos-env';

const backendPort = todosEnv.backendPort();

const app = new Koa();


const adapter = createKoaMiddleware({
  router: appRouter,
  prefix: trpcPath,
});
app.use(adapter);
app.listen(backendPort);
console.log("Listening on: ", backendPort);

