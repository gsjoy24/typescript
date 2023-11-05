{
	//! map type
	type ArrNum = {
		height: number;
		width: number;
	};
	// changing types
	type ArrString = {
		[key in keyof ArrNum]: string;
	};
}
