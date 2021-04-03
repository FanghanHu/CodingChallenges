/**
 * split "c*a*b" into ['c*', 'a*', 'b']
 * @param {string} p the pattern
 * @returns {string[]} split pattern into smallest elements and return them as an array
 */
function splitPattern(p) {
	const result = [];
	for (let i = 0; i < p.length; i++) {
		const char = p.charAt(i);
		if (char === "*") {
			const lastChar = result.pop();
			result.push(lastChar + "*");
		} else {
			result.push(char);
		}
	}
	return result;
}

/**
 *
 * @param {string} s target string
 * @param {string} pEle an element in the pattern
 * @return false if element failed to match, or s after removing what the element has matched, could be an empty string.
 */
function matchEle(s, pEle) {
	if (pEle.endsWith("*")) {
		//recursively match the prefix pattern
		const prefix = pEle.charAt(0);
		let result = s;
		let lastResult = s;
		do {
			result = lastResult;
			lastResult = matchEle(result, prefix);
		} while (lastResult !== false);
		return result;
	} else {
		if (pEle === ".") {
			//matches everything
			if (s.length > 0) {
				return s.substring(1);
			} else {
				return false;
			}
		} else {
			//matches itself
			if (s.startsWith(pEle)) {
				return s.substring(1);
			} else {
				return false;
			}
		}
	}
}

/**
 * /**
 * Write a function that takes two string as arguments, s and p
 * and return a boolean dnoting whether s matches p.
 *
 * p is a sequence of any number of the following:
 *  1. a-z - which stands for itself
 *  2. . - which matches any character
 *  3. * - which matches 0 or more occurrences of the previous single character
 *
 *  s = 'aba',  p = 'ab'    => false
 *  s = 'aa',   p = 'a*'    => true
 *  s = 'ab',   p = '.*'    => true
 *  s = 'ab',   p = '.'     => false
 *  s = 'aab',  p = 'c*a*b' => true
 *  s = 'aaa',  p = 'a*.'   => true
 *
 * @param {string} s the target string
 * @param {string} p the pattern
 */
function matchPattern(s, p) {
	let temp = s;
	const pEles = splitPattern(p);
	for (const pEle of pEles) {
		temp = matchEle(temp, pEle);
		if (temp === false) {
			return false;
		}
	}

	return temp === "";
}

console.assert(matchEle("abcde", "a") === "bcde");
console.assert(matchEle("vvvde", "v*") === "de");
console.assert(matchEle("dve", "v*") === "dve");
console.assert(matchEle("dasd", ".*") === "");

console.log(matchPattern("aba", "ab"));
console.log(matchPattern("aa", "a*"));
console.log(matchPattern("ab", ".*"));
console.log(matchPattern("ab", "."));
console.log(matchPattern("aab", "c*a*b"));
console.log(matchPattern("aaa", "a*."));