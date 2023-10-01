```
git clone https://github.com/maprohu/typescript_ws
cd typescript_ws/todos
docker compose up -d
```

```
cd typescript_ws
yarn install
yarn --cwd todos/env tsc
yarn --cwd todos/env-node tsc
yarn --cwd todos/backend tsc
```

```
cd typescript_ws
yarn --cwd todos/backend start
```

```
cd typescript_ws
yarn --cwd todos/web start
```

