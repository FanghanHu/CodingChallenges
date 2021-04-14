
/**
 * generate numbers on a specific row in the pascals triangle
 */
var getRow = function (rowIndex) {
	function factorial(n) {
		return n ? n * factorial(n - 1) : 1;
	}
	let arr = [1];
	for (let i = 1; i <= rowIndex; i++) {
		// let res = (factorial(rowIndex)/ (factorial(i)*factorial(rowIndex-i)))
		arr.push(
			factorial(rowIndex) / (factorial(i) * factorial(rowIndex - i))
		);
	}
	return arr;
};


console.log(getRow(3));