{
	//! getter and setter
	class BankAccount {
		public readonly id: number; // this value will never changed!
		public name: string;
		private _balance: number; //this value can be access only in this class
		constructor(id: number, name: string, balance: number) {
			this.id = id;
			this.name = name;
			this._balance = balance;
		}
		// addDeposit(amount: number) {
		// 	this._balance += amount;
		// }
		// getBalance() {
		// 	return this._balance;
		// }

		// getter   
		get balance() {
			return this._balance; //it will work like a property
		}
		// setter
		set deposit(amount: number) {
			this._balance += amount;
		}
	}

	const account = new BankAccount(12, 'Asif', 20);
	const balance = account.balance; //it will work like a property
	console.log(balance);
	// account.addDeposit(200);
	// console.log(account.getBalance());
}
