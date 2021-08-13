const { query } = require('../index');
async function selectRecipes() {
	const queryToAdd = `
    SELECT * FROM recipes;`;
	const recipes = await query(queryToAdd);
	console.log(`You selected all recipes`);
	return recipes.rows;
}

module.exports = { selectRecipes };
