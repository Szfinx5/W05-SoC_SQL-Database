import { query } from "../index.js";
//import 'dotenv/config'


const sqlString = `INSERT INTO customers(first_name, last_name, phone, email, street, city, state, zip_code)
VALUES
('Debra','Burks',NULL,'debra.burks@yahoo.com','9273 Thorne Ave. ','Orchard Park','NY',14127),
('Lashawn','Ortiz',NULL,'lashawn.ortiz@msn.com','27 Washington Rd. ','Longview','TX',75604),
('Garry','Espinoza',NULL,'garry.espinoza@hotmail.com','7858 Rockaway Court ','Forney','TX',75126),
('Linnie','Branch',NULL,'linnie.branch@gmail.com','314 South Columbia Ave. ','Plattsburgh','NY',12901),
('Emmitt','Sanchez','(212) 945-8823','emmitt.sanchez@hotmail.com','461 Squaw Creek Road ','New York','NY',10002),
('Caren','Stephens',NULL,'caren.stephens@msn.com','914 Brook St. ','Scarsdale','NY',10583),
('Georgetta','Hardin',NULL,'georgetta.hardin@aol.com','474 Chapel Dr. ','Canandaigua','NY',14424),
('Lizzette','Stein',NULL,'lizzette.stein@yahoo.com','19 Green Hill Lane ','Orchard Park','NY',14127),
('Aleta','Shepard',NULL,'aleta.shepard@aol.com','684 Howard St. ','Sugar Land','TX',77478),
('Tobie','Little',NULL,'tobie.little@gmail.com','10 Silver Spear Dr. ','Victoria','TX',77904),
('Adelle','Larsen',NULL,'adelle.larsen@gmail.com','683 West Kirkland Dr. ','East Northport','NY',11731),
('Kaylee','English',NULL,'kaylee.english@msn.com','8786 Fulton Rd. ','Hollis','NY',11423),
('Corene','Wall',NULL,'corene.wall@msn.com','9601 Ocean Rd. ','Atwater','CA',95301);
`
async function populateCustomerTable (){
    const res = await query(sqlString);
    console.log("The table was populated");
};

populateCustomerTable();