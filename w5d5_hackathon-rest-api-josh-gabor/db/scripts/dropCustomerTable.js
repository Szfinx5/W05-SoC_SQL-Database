import { query } from "../index.js";

const sqlQuery = `DROP TABLE IF EXISTS customers;`;

async function dropTable() {
  const res = await query(sqlQuery);
  console.log("Table was Dropped");
}

dropTable();
