{
	//! interface
	type User1 = {
		name: string;
		age: number;
	};
	const user1: User1 = {
		name: 'Joy',
		age: 111
	};

	// !interface should be wrapped with curly braces
	interface User2 {
		name: string;
		age: number;
	}
	const user2: User2 = {
		name: 'Gour',
		age: 22
	};

	//! expanding a type
	type User3 = User1 & { role: string };
	const user3: User3 = {
		name: 'kk',
		age: 12,
		role: 'user'
	};

	//! expending a interface type
	interface User4 extends User2 {
		role: string;
	}
	const user4: User4 = {
		name: 'kk',
		age: 12,
		role: 'user'
	};

	//! type alias and interface
	// defining as simply
	type Roll1 = number[];
	const roll1: Roll1 = [1, 2, 3, 4];

	// with interface
	interface Roll2 {
		[index: number]: number;
	}
	const role2: Roll2 = [1, 2, 3, 4];

	// ! with functions
	type Add = (num1: number, num2: number) => number;
	interface Add2 {
		(num1: number, num2: number): number;
	}
	const add: Add2 = (num1, num2) => num1 + num2;
}
