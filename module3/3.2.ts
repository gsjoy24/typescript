{
	// !oop - inheritance
	class Person {
		name: string;
		age: number;
		address: string;

		constructor(name: string, age: number, address: string) {
			this.name = name;
			this.age = age;
			this.address = address;
		}
		getSleep(hours: number) {
			console.log(`${this.name} sleeps ${hours} a day!`);
		}
	}

	class Person1 extends Person {
		constructor(name: string, age: number, address: string) {
			super(name, age, address);
		}
	}
	class Person2 extends Person {
		height: number;
		constructor(name: string, age: number, address: string, height: number) {
			super(name, age, address);
			this.height = height;
		}
		doSomething() {
			console.log('doing');
		}
	}
}
