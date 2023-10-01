import * as zg from 'zapatos/generate';
import { databaseUrl } from 'todos-env';

const zapCfg: zg.Config = {
  db: { connectionString: databaseUrl },
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