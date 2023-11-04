{
	interface Developer<T> {
		name: string;
		computer: {
			brand: string;
			model: string;
			releaseYear: number;
		};
		smartWatch: T;
	}

	const developer: Developer<{ brand: string; model: string; display: string }> = {
		name: 'Joy',
		computer: {
			brand: 'Hp',
			model: 'g3',
			releaseYear: 2000
		},
		smartWatch: {
			brand: 'apple',
			model: 'pro',
			display: 'OLED'
		}
	};

	const developer2: Developer<{ brand: string; model: string; display: string; features: number }> = {
		name: 'Joy',
		computer: {
			brand: 'Hp',
			model: 'g3',
			releaseYear: 2000
		},
		smartWatch: {
			brand: 'apple',
			model: 'pro',
			display: 'OLED',
			features: 12
		}
	};
	// !
}
