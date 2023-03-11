const palindromes = (text) => {
	const textArray = text.toLowerCase().replace(/[-.,*!{}()]/g, '').split(' ').join('').split('');
	const reverseArray = [...textArray].reverse();
	for (var i = 0; i < textArray.length; i++) {
		if(textArray[i] !== reverseArray[i]) {
			return false;
		}
	}
	return true;
}

