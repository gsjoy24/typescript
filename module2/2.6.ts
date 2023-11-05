{
	// !constraints
	// ! the name and the roll field is required
	const addStudent = <T extends { name: string; roll: number }>(student: T) => {
		return {
			...student,
			isMota: true
		};
	};

	const res1 = addStudent({ name: 'Joy', roll: 12 });
}
