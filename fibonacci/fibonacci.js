const fibonacci = (index) => {
	index = Number(index);

	if (index < 0) {
		return 'OOPS';
	}

	let fibonacciArray = [1, 1];

	if (index > 2) {
		for(let i = 2; i < index; i++) {
		fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
		}
	}
	
	return fibonacciArray[index - 1];
}

