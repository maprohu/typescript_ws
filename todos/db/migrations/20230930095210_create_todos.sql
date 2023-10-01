-- migrate:up
CREATE TABLE "todos" 
( "id" SERIAL PRIMARY KEY
, "description" TEXT NOT NULL
, "complete" BOOLEAN NOT NULL DEFAULT FALSE );

-- migrate:down
drop table if exists todos;