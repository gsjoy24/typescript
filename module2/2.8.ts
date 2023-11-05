{
	// !promise
	type Todo = { userId: number; id: number; title: string; completed: boolean };

	const getData = async (): Promise<Todo> => {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		const data = await res.json();
		return data;
	};
	getData();
}
