function add(num1: number, num2: number = 10): number {
	// this function will take two numbers. wen can not pass any other type of data to this. With that, this function will return only a number.
	return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;
