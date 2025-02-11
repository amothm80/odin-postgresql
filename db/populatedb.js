#! /usr/bin/env node

import pg from "pg";
import "dotenv/config";
const { Client } = pg;

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DBUSER}:${process.env.DBPASSWORD}@localhost:5432/top_users`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
