import {sumOfArray} from "./Array/ArrayReduceExample.mjs";
import {writeln, write} from "./ConsoleUtil.mjs";
import {nesneTipi} from "./KeywordsExample.mjs";
import {foo1} from "./LambdaFunctionsExample.mjs";


let arr = [3, 6, 2, 8, 5, 0, 3, 1, 6, 98, 232, 12]
//Parametresiz sort yazıya göre sıralama yapar

console.log(arr.sort((x, y) => x - y))