{
	// ! conditional type
	type Sheikh = {
		bike: string;
		car: string;
		plane: string;
	};
	type CheckType<T> = T extends keyof Sheikh ? true : false;
	type HasCar = CheckType<'car'>;
}
