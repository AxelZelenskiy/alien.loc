class SwapiService {
	_api_url = 'https://swapi.co/api/';
	async getResource(url) {
		const resp = await fetch(`${this._api_url}${url}`);
		if (!resp.ok) {
			throw new Error(`Could not fetch ${url} , received ${resp.status}`)
		}
		return await resp.json();
	}

	getPerson(id) {
		return this.getResource(`people/${id}/`);
	}

	getPlanet(id) {
		return this.getResource(`planets/${id}/`);
	}

	getShip(id) {
		return this.getResource(`starships/${id}/`);
	}

	async getPeopleList () {
		const PeopleList = await this.getResource('people/');
		return PeopleList.results;
	}

	async getPlanetsList () {
		const PlanetsList = await this.getResource('planets/');
		return PlanetsList.results;
	}

	async getStarshipsList () {
		const StarshipsList = await this.getResource('starships/');
		return StarshipsList.results;
	}
};

let sw = new SwapiService();
let result = sw.getPlanetsList().then((data) => {
	console.log('data from then ', data);
	return data;});
console.log('sw result is -> ', result);
document.getElementById('test3').innerHTML = sw;