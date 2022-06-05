import { query } from "../db/index.js";

export async function getCats() {
  const res = await query(`SELECT * FROM cats`);
  return res.rows;
}

export async function getCatsByName(param) {
  const res = await query(`SELECT * FROM cats WHERE name like '%${param}%'`);
  return res.rows;
}

export async function getCatsByHuman(param) {
  const res = await query(`SELECT * FROM cats WHERE human like '%${param}%'`);
  return res.rows;
}

export async function getCatsByHobby(param) {
  const res = await query(`SELECT * FROM cats WHERE hobby like '%${param}%'`);
  return res.rows;
}

export async function getCatsByID(param) {
  const res = await query(`SELECT * FROM cats WHERE id = ${param}`);
  return res.rows;
}

export async function createCats(param) {
  const res = await query(
    `INSERT INTO cats (name, human, hobby) VALUES ('${param.name}', '${param.human}', '${param.hobby}');`
  );
  return `${param.name}' was successfully added`;
}

export async function deleteCatById(param) {
  const res = await query(`DELETE FROM cats WHERE id = ${param}`);
  return `Cat ID:${param} was successfully deleted`;
}

export async function updateDatByID(param, id) {
  const res = await query(
    `UPDATE cats SET name = '${param.name}', human = '${param.human}', hobby = '${param.hobby}' WHERE id = '${id}';`
  );
  return `Cat ID:${id} was successfully updates`;
}
