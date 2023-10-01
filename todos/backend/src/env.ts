import { envGetterFromProcessEnv, todosEnvFromGetter } from "todos-env";

import * as dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const myEnv = dotenv.config({ path: __dirname + '/../../.env', });
dotenvExpand.expand(myEnv);

export const todosEnv = todosEnvFromGetter(envGetterFromProcessEnv(process.env));