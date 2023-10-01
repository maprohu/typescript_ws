// from nodejs import todos-env-node

interface Dict<T> {
    [key: string]: T | undefined;
}
export declare interface EnvGetter {
    get(key: string): string | undefined;
}

export function envGetterFromProcessEnv(processEnv: Dict<String>): EnvGetter {
  return {
    get: (key) => processEnv[key]?.toString(),
  };
}

export function todosEnvFromGetter(env: EnvGetter) {
  function required(name: string) {
    return  env.get(name) ?? (() => { throw new Error(`missing env var: ${name}`) })(); 
  }
  function fallback(name: string, fallback: string) {
    return  env.get(name) ?? fallback;
  }
  function fallbackInt(name: string, fallback: number) {
    const stringValue = env.get(name);
    return stringValue === undefined ? fallback : parseInt(stringValue);
  }
  return {
    backendHost: () => fallback("TODOS_BACKEND_HOST", "localhost"),
    backendPort: () => fallbackInt("TODOS_BACKEND_PORT", 3000),
    databaseUrl: () => required("TODOS_DATABASE_URL"),
  };
}


export const trpcPath = "/trpc";

