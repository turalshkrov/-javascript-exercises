const add = (num1, num2) => {
	num1 = Number(num1);
	num2 = Number(num2);
	return num1 + num2;
}

const subtruct = (num1, num2) => {
	num1 = Number(num1);
	num2 = Number(num2);
	return num1 - num2;
}

const sum = (array) => {
	const sum = array.length === 0 ? 0
	: array.reduce((sum, num) => {
		return sum + num;
	})
	return sum;
}

const multiply = (array) => {
	const result = array.length === 0 ? 0
	: array.reduce((result, num) => {
		return result * num;
	})
	return result;
}

const power = (num, power) => {
	let result = 1;
	if (power >= 1) {
		for (let i = 1; i <= power; i++) {
		result *= num;
		}
		return result;
	} 
	else if (power === 0) {
		return result;
	}
	else if(power <= -1) {
		for (let i = 1; i <= -power; i++) {
		result *= num;
		}
		return 1 / result;
	}
}

const factorial = (num) => {
	let result;
	if (num === 0) {
		return result = 1;
	} else if(num >= 1) {
		result = 1;
		for (let i = 1; i <= num; i++) {
			result *= i;
		}
		return result;
	}
}
