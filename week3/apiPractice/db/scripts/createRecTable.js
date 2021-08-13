//The function on this page creates the table in postgres using SQL syntax. It creates a ID number, 4 columnns accepting text input.  Await query to finish. The const query imports the query method from index file,

const { query } = require("../index");

async function createRecipeTable() {
  const queryToSend = `CREATE TABLE recipes(
    id SERIAL PRIMARY KEY,
    title TEXT,
    ingredients TEXT [],
    instructions TEXT,
    image TEXT
  );`;
  await query(queryToSend);
  console.log("Table recipes was created");
}

createRecipeTable();
