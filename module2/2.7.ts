{
	// !generic constrain with keyof operator
	type Vehicle = {
		bike: string;
		car: string;
		ship: string;
	};

	type Owner = 'bike' | 'car' | 'ship'; //manually
	type Owner2 = keyof Vehicle;

	const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => obj[key];

	const car = {
		model: 'toyota',
		year: 2000
	};
	const res1 = getPropertyValue(car, 'model');
}
