
import type { RequestEvent } from '@builder.io/qwik-city';
import { todosEnvFromGetter } from 'todos-env';

export function todosRequestEnv(requestEvent: RequestEvent) {
  return todosEnvFromGetter(requestEvent.env);
}