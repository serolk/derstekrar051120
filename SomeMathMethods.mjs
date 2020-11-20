export function getDigitCount(val) {

	return val === 0 ? 1 : parseInt(Math.log10(Math.abs(val))) + 1

}

export function getDigitCountAlternative(val) {

	if (!val) //Değer sıfır ise
		return 1

	let count = 0

	while (val !== 0) {
		++count
		val = parseInt(val / 10)
	}
}

export function getReverseOfNumber(val) {
	let reverse = 0
	while (val !== 0) {
		reverse = reverse * 10 + val % 10
		val = parseInt(val / 10)
	}
	return reverse
}

export function isEven(val) {
	return val % 2 === 0
}

export function randomInt(min, max){

	if(min >= max)
		throw new Error("Min < Max olmalıdır")

	return parseInt(randomNumber(min, max))
}

export function randomNumber(min, max) //[min, max)
{
	if(min >= max)
		throw new Error("Min < Max olmalıdır")

	return Math.random() * (max - min) + min
}


