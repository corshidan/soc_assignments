const express = require('express');
const router = express.Router();
const { selectRecipes } = require('../db/models/selectRecipes');
const { addRecipeToDb } = require('../db/models/insertRecipe');

router.get('/', async function (req, res) {
	const recipes = await selectRecipes();
	console.log(recipes);
	res.json({
		message: 'Good',
		success: true,
		payload: recipes,
	});
});

router.post('/', function (req, res) {
	const { title, ingredients, instructions, image } = req.body;
	addRecipeToDb(title, ingredients, instructions, image);
});

module.exports = router;
