import {writeln, write} from "./ConsoleUtil.mjs";

//İsimsiz fonksiyon örneği:
let foo = function (a, b) { return a + b}


//İsimsiz fonksiyonlara bir callBack örneği:

export function foo1() {

	let fn = function (val) {
		return val * val
	}

	let array = [1, 2, 3, -6]

	function forEach(array, fn){
		for (let elem of array)
			writeln(fn(elem))
	}

	forEach(array, fn)
}

/*
1. (<değişken listesi>) => ifade
2. (<değişken listesi>) => {..}
3.  <değişken> => ifade
4.  <değişken> => {…}
5. () => ifade
6. () => {…}
 */

let f = (a, b) => a + b



