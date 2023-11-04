{
	// !functions with generics
	const createArray = (param: string): string[] => {
		return [param];
	};
	const result1 = createArray('Joy');

	const createArrayGeneric = <T>(param: T): T[] => {
		return [param];
	};
	const result2 = createArrayGeneric<string>('Joy');

	type User = { id: number; name: string };
	const result3 = createArrayGeneric<User>({ id: 121, name: 'Joy' });
}
