{
	// union type
	type User = {
		name: string;
		email?: string;
		gender: 'male' | 'female';
	};

	const user1: User = {
		name: 'Joy',
		gender: 'male'
	};

	// Interceptor type 
	type FrontendDeveloper = {
		skills: string[];
		designation1: string;
	};
	type BackendDeveloper = {
		skills: string[];
		designation2: string;
	};

	type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

	const developer: FullStackDeveloper = {
		skills: ['1', '3'],
		designation1: 'sss',
		designation2: 'ssd'
	};
}
