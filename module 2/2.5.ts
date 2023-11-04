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

	// ! generics tuple
	const createArrayWithTuple = <X, Y>(param1: X, param2: Y): [X, Y] => {
		return [param1, param2];
	};
	const result4 = createArrayWithTuple<string, number>('Joy', 1212);

	// !
	const addStudent = <T>(student: T) => {
		return {
			...student,
			isMota: true
		};
	};

	const res1 = addStudent({ name: 'Joy', roll: 12 });
}
