// This function takes in the arguments inputted by the user on the page. It inserts this information into our postgres table. The values are defined so that people cannot access other information on our table/database. The await query tells the database to wait for the information inputted by the user to be entered in the table, once it has done so, it responds with a console log ''you added title etc'' . The module exports the function we have created for any other file to access/use it.

const { query } = require("../index");
async function addRecipeToDb(title, ingredients, instructions, image) {
  const queryToAdd = `
    INSERT INTO recipes(title,ingredients,instructions,image)
    VALUES ($1,$2,$3,$4)`;
  await query(queryToAdd, [title, ingredients, instructions, image]);
  console.log(`You added ${title}`);
}

module.exports = { addRecipeToDb };
