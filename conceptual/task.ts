/* 
 * Develop a TypeScript function to retrieve specific details from an array of objects. Your task is to extract 'id' and 'name' properties, unveiling their concealed values.

* After crafting the function, apply it to an array of diverse objects. Showcase the extracted 'id' and 'name' details, revealing the secrets kept within these mysterious objects.
 */

type user = {
	id: number;
	name: string;
};

const users: user[] = [
	{
		id: 1,
		name: 'Joy'
	},
	{
		id: 2,
		name: 'Gour'
	},
	{
		id: 3,
		name: 'Asif'
	},
	{
		id: 4,
		name: 'Fahad'
	}
];

const getPropertyFromArray = <T, K extends keyof T>(arr: T[], key: K): T[K][] => {
	return arr.map((obj) => obj[key]);
};

// practicing
console.log(getPropertyFromArray(users, 'id'));
