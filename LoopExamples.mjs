

let numberArray = [1, 2, 3, 4, 5, 6, 7]

let stringArray = ["Ben", "Sen", "O", "Biz", "Siz", "Onlar"]

export function whileExample() {

	let index = 0

	while(index < numberArray.length){
		numberArray[index++]
	}
}

export function doWhileExample() {

	let index = 0
	do {
		numberArray[index++]
	}while(index < numberArray.length)
}

export function forExample() {

	for(let i = 0; i < numberArray.length; i++){
		numberArray[i]
	}
}

export function forinExample() {

	for (let i in numberArray)
		numberArray[i]

	numberArray.name = "abc"
	numberArray.id = 125

	//Dizinin sade bir dizi olmasına gerek yok tüm elemanlar gezilebilir:
	for (let i in numberArray)
		numberArray[i]

}

export function forofExample() {

	for (let val of stringArray)
		val
}

export function foreachExample() { //array.forEach(function calback(item, index, array)

	let sum = 0
	numberArray.forEach(function(number) {
		sum += number;
	})
}