import { query } from "../index.js";

const sqlQuery = `CREATE TABLE IF NOT EXISTS cats(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    human TEXT,
    hobby TEXT);`;

async function createTable(){
    const res = await query(sqlQuery);
    console.log("Table was created");
};

createTable();
