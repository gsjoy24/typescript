{
	const user = null;
	// this is nullish operator. this will work when the user is null or undefined
	const result = user ?? 'Guest';
	console.log(result);
}
