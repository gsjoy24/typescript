{
	//! Abstraction
	// getting idea
	interface Vehicle1 {
		startEngine(): void;
		stopEngine(): void;
		move(): void;
	}

	class Car implements Vehicle1 {
		startEngine(): void {
			console.log('Engine starting');
		}
		stopEngine(): void {
			console.log('Engine Stopping');
		}
		move(): void {
			console.log('i am moving');
		}
	}
	// idea
	abstract class Car2 {
		abstract startEngine(): void;
		abstract stopEngine(): void;
		abstract move(): void;
	}

	class Toyota extends Car2 {
		startEngine(): void {
			console.log('s');
		}
		stopEngine(): void {
			console.log('d');
		}
		move(): void {
			console.log('object');
		}
	}

	// ! abstract class
}
