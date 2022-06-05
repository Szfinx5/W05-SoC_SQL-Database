import { query } from "../db/index.js";

export async function getCustomers() {
  console.log("b4 await");
  const response = await query("SELECT * FROM customers;");
  console.log("after await");
  const display = response.rows;
  return display;
}

export async function getCustomerById(id) {
  const queryText = `SELECT * FROM customers WHERE customers.customer_id = ${id};`;
  console.log(queryText);
  const { rows } = await query(queryText);
  return rows;
}

export async function getCustomerSearch(search) {
  const queryText = `SELECT * FROM customers 
  WHERE customers.First_name like '%${search}%' 
  OR customers.Last_name like '%${search}%' OR customers.email like '%${search}%' 
  OR customers.street like '%${search}%' OR customers.city like '%${search}%' 
  OR customers.state like '%${search}%';`;
  console.log(queryText);
  const { rows } = await query(queryText);
  console.log(rows);
  return rows;
}

export async function createCustomer(body) {
  const queryText = `INSERT INTO customers (first_name, last_name, phone, email, street, city, state, zip_code) 
    VALUES ('${body.first_name}', 
    '${body.last_name}', 
    '${body.phone}', 
    '${body.email}', 
    '${body.street}', 
    '${body.city}', 
    '${body.state}', 
    '${body.zip_code}')`;
  const { rows } = await query(queryText);
  console.log(rows);
  return rows;
}

export async function updateCustomer(id, body) {
  const queryText = `UPDATE customers SET first_name = '${body.first_name}', 
  last_name = '${body.last_name}', 
  phone = '${body.phone}', 
  email = '${body.email}', 
  street = '${body.street}', 
  city = '${body.city}', 
  state = '${body.state}', 
  zip_code = '${body.zip_code}'
  WHERE customer_id = ${id}`;
  const { rows } = await query(queryText);
  console.log(rows);
  return rows;
}

export async function deleteCustomer(id) {
  const queryText = `DELETE FROM customers WHERE customer_id = '${id}'`;
  const { rows } = await query(queryText);
  console.log(rows);
  return rows;
}
