import { query } from "../index.js";
import { cats } from "../data.js";

async function populateTable() {
  for (let i = 0; i < cats.length; i++) {
    let sqlQuery = `INSERT INTO cats (name, human, hobby) VALUES ('${cats[i].name}', '${cats[i].human}', '${cats[i].hobby}');`;
    let res = await query(sqlQuery);
    console.log(`${cats[i].name} was added to the table`);
  }
}

populateTable();
