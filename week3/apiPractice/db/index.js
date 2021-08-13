//The below is used to connect to the database. It also exports the query method used which takes in SQL language as 'text', the parameters we have set ( ingredients, title etc). The rest we still need to learn. The PG is postgres.

const { Pool } = require('pg');
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'postgres',
	password: '4392',
	port: 5432,
});

module.exports = {
	query: (text, params, callback) => {
		return pool.query(text, params, callback);
	},
};
