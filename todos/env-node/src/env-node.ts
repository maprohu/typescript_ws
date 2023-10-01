import * as dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import { envGetterFromProcessEnv, todosEnvFromGetter } from 'todos-env';

const myEnv = dotenv.config({ path: __dirname + '/../../.env', });
dotenvExpand.expand(myEnv);

export const todosEnv = todosEnvFromGetter(envGetterFromProcessEnv(process.env));