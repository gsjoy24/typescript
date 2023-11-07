{
	// !static
	class Counter {
		static count: number = 0;
		static increment() {
			return (Counter.count = Counter.count + 1);
		}
		static decrement() {
			return (Counter.count = Counter.count - 1);
		}
	}
	// const count1 = new Counter();
	// console.log(count1.increment());
	// const count2 = new Counter();
	// console.log(count2.increment());
	console.log(Counter.increment()); // 1
	console.log(Counter.increment()); // 2
	console.log(Counter.increment()); // 3
	console.log(Counter.increment()); // 4
}
