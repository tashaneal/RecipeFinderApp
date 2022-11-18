const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '39d5d4ea80msh27e86f9935df304p1b0882jsn82d243fc99e3',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));