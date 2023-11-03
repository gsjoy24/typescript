{
	// alias
	type Student = {
		name: string;
		roll: number;
		city: string;
	};

	const student: Student = {
		name: 'Joy',
		roll: 223,
		city: 'Rajshahi'
	};

	type UserName = string;
	const userName: UserName = 'gour24';

	type Add = (num1: number, num2: number) => number;

	const add: Add = (num1, num2) => num1 + num2;
}
