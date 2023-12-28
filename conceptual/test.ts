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

const getPropertyFromArray = <T, K extends keyof T>(arr: T[], key: K): T[K][] => {};

// practicing
