async function getData() {
	const response = await fetch(
		'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US',
		{
			method: 'GET',
			headers: {
				'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
			},
		}
	);
	const data = await response.json();
	console.log(data);
}
getData();
