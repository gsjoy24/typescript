{
	// type assertion
	const kgToGm = (value: string | number): string | number | undefined => {
		if (typeof value === 'string') {
			const convertedValue = parseFloat(value) * 1000;
			return `The converted value is ${convertedValue}.`;
		} else if (typeof value === 'number') {
			return value * 1000;
		}
	};

	// specifying the type of the result1
	const result1 = kgToGm(1000) as number;
}
