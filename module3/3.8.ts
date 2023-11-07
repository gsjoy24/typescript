{
	//! polymorphism
	class Person {
		getSleep() {
			console.log('I sleep 8 hours a day!');
		}
	}

	class Student extends Person {
		getSleep() {
			console.log('I sleep 7 hours a day!');
		}
	}
	class Developer extends Person {
		getSleep() {
			console.log('I sleep 6 hours a day!');
		}
	}
	const getSleepHours = (param: Person) => {
		param.getSleep();
	};
	const person1 = new Person();
	const person2 = new Student();
	const person3 = new Developer();

	getSleepHours(person2);
}
