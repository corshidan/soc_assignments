const path = require('path');
const express = require('express');
const app = express();
const port = 5000;

const { addRecipeToDb } = require('./db/models/insertRecipe.js');
const apiRouter = require('./routes/api');
app.use(express.static('public'));
app.use(express.json());

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, `views`, `index.html`));
});

app.use('/api/recipes', apiRouter);

app.use('/api/recipes', apiRouter);

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
