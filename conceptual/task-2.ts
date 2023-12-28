/*
 * Your challenge is to create a TypeScript function that turns an array of key-value pairs into a neatly organized object. Weave a function that seamlessly merges the keys and values from the array, transforming them into a structured object.

* Once your function is crafted, apply it to an array filled with various key-value pairs. Witness the array's shift into a tidy and structured object, showcasing its newfound form.
 */

const keyValArr: [string, any][] = [
	['id', 1],
	['name', 'Joy'],
	['age', 111],
	['address', 'Rajshahi']
];

const getObj = <T extends string, U>(arr: [T, U][]): Record<T, U> => {
	const transformedObj = arr.reduce((obj, [key, val]) => {
		obj[key] = val;
		return obj;
	}, {} as Record<T, U>);

	return transformedObj;
};

console.log(getObj(keyValArr));

// understanding reduce
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum);
