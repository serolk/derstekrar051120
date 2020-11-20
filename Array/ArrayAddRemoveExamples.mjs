import {randomInt} from "../SomeMathMethods.mjs";
import {write} from "../ConsoleUtil";


function arrayPushPopShiftUnshift() {
	let arr = []

	let n = 10

	while (n--) {
		arr.push(randomInt(0, 10)) //Dizinin sonuna eleman ekler
	}

	while (arr.length > 0) //Dizinin sonundan eleman alır
		arr.pop()

	n = 10

	while (n--) {
		arr.unshift(randomInt(0, 10)) //Dizinin başından eleman ekler
	}

	while (arr.length > 0) //Dizinin başından eleman alır
		arr.shift()
}



