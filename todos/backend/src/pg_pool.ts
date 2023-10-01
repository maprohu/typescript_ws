import pg from 'pg';

export function createDatabasePool(databaseUrl: string) {
  const pool =  new pg.Pool({ connectionString: databaseUrl });
  pool.on('error', err => console.error(err));  // don't let a pg restart kill your app
  return pool;
}
