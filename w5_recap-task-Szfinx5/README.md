# Recap Tasks

### Part 1 - 🎵🎵 Get your server running... Head out on the highway... 🎵🎵

👉 1. Go to `app.js`, and follow the steps in the comments at the bottom to get your server set up with basic REST routes.

### Part 2 - Postgres

👉 2a. Create a database on Heroku. Install the [node-postgres package](https://node-postgres.com/), and set up your pool in `db/index.js` using your database credentials. Remember to check the [example project structure](https://node-postgres.com/guides/project-structure) and [connecting](https://node-postgres.com/features/connecting) pages of the docs if you get stuck!

👉 2b. Create and populate your table:

- **Create your table:** In `/scripts/createTable.js`, write a SQL statement to create a table for the cats data. Import and use your `pool` in a function to send your SQL statement to your database. Run this file and check for your table on the Heroku database.
- **Populate your table:** In `/scripts/populateTable.js`, you'll notice that you have an array of cats as sample data. Write a SQL query to populate the table you made in your `createTable` script with this cats data. Use your `pool` to send this SQL query to your database too. Run this file and check that your table is populated on the Heroku database.

### Part 3 - Put it all together

👉 3. Hook your server up to the cats data in your Postgres database rather than the array inside of `app.js`.

### Bonus

Once your API is working and hooked up to your database, see if you can see all your cat details on your front end, and then you can use any remaining time to refine and refactor.
