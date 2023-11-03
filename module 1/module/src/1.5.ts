//object type

const user: {
	firstName: string;
	middleName?: string; //this field will be optional.
	lastName: string;
	isSingle: boolean;
	country: 'Bangladesh'; //literal type, the value should be the same, or it will be an error.
	readonly isMota: boolean; //this is a readonly field, we can't modify it.
} = {
	firstName: 'Gour',
	lastName: 'Saha',
	isSingle: true,
	country: 'Bangladesh',
	isMota: true
};
