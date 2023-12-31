{
	//! utility type
	//! Pick
	type Person = {
		name: string;
		age: number;
		email?: string;
		contact: string;
	};
	type Name = Pick<Person, 'name'>;
	type NameAndAge = Pick<Person, 'name' | 'age'>;

	//! omit
	type Contact = Omit<Person, 'name' | 'age'>;

	//! Required
	type NewPerson = Required<Person>;

	//! Partial
	type NewPerson2 = Partial<Person>;

	//! Readonly
	type NewPerson3 = Readonly<Person>;
}
