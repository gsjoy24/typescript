{
	//! generic type
	// reusable type for arrays
	type GenericArray<param> = Array<param>;

	const numbers0: number[] = [1, 2, 3, 4];
	const numbers: Array<number> = [1, 2, 3, 4];
	const numbers2: GenericArray<number> = [1, 2, 3, 4];

	const people0: string[] = ['Joy', 'Asif', 'Fahad'];
	const people: Array<string> = ['Joy', 'Asif', 'Fahad'];
	const people2: GenericArray<string> = ['w', 'e', 'a'];

	const users: GenericArray<{ name: string; age: number }> = [
		{
			name: 'mr.d',
			age: 98
		},
		{
			name: 'mr.d',
			age: 98
		},
		{
			name: 'mr.d',
			age: 98
		}
	];

	// ! tuple
	const couple: [string, string] = ['Joy', 'Gour'];

	type GenericTuple<X, Y> = [X, Y];
	const couple2: GenericTuple<string, string> = ['Gour', 'Joy'];

	const UserID: GenericTuple<number, { name: string; email: string }> = [1212, { name: 'Joy', email: 'dfar' }];
	//
}
