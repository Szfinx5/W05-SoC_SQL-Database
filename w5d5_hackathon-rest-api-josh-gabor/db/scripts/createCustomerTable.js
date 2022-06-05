import { query } from "../index.js";
//import 'dotenv/config'


const sqlString = `
CREATE TABLE IF NOT EXISTS customers (
	customer_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	first_name TEXT NOT NULL,
	last_name TEXT NOT NULL,
	phone TEXT,
	email TEXT NOT NULL,
	street TEXT,
	city TEXT,
	state TEXT,
	zip_code TEXT);
`
async function createCustomerTable (){
    const res = await query(sqlString);
    console.log("The table was created");
};

createCustomerTable();
