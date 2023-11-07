{
	//! instanceof guard
	class Animal {
		name: string;
		species: string;
		constructor(name: string, species: string) {
			this.name = name;
			this.species = species;
		}
		makeSound() {
			console.log('I am making sound!');
		}
	}

	class Dog extends Animal {
		constructor(name: string, species: string) {
			super(name, species);
		}
		makeBark() {
			console.log('I am barking');
		}
	}

	class Cat extends Animal {
		constructor(name: string, species: string) {
			super(name, species);
		}
		makeMewing() {
			console.log('I am mewing');
		}
	}

	const IsDog = (animal: Animal): animal is Dog => {
		return animal instanceof Dog;
	};
	const IsCat = (animal: Animal): animal is Cat => {
		return animal instanceof Dog;
	};

	const getAnimal = (animal: Animal) => {
		// if (animal instanceof Dog) {
		// 	animal.makeBark();
		// } else if (animal instanceof Cat) {
		// 	animal.makeMewing();
		// } else {
		// 	animal.makeSound();
		// }
		if (IsDog(animal)) {
			animal.makeBark();
		} else if (IsCat(animal)) {
			animal.makeMewing();
		} else {
			animal.makeSound();
		}
	};
	const dog = new Dog('Asif', 'dog');
	const cat = new Cat('Fahad', 'cat');

	getAnimal(cat);

	// ! end
}
