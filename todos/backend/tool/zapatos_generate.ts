import * as zg from 'zapatos/generate';
import { todosEnv } from 'todos-env-node';

const zapCfg: zg.Config = {
  db: { connectionString: todosEnv.databaseUrl() },
  outDir: __dirname + '/../src',
  schemas: {
    "public": {
      include: "*",
      exclude: [
        "schema_migrations", 
      ]
    }
  }
};

(async () => {
  await zg.generate(zapCfg);
})();