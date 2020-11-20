/* Bu Modülde Array sınıfının
   reduce metodunun örnekleri yer alır

   Faydalı Link : https://medium.com/@ibrahim.kurce/javascript-reduce-fonksiyonu-da5e09ba2e44
*/

export {sumOfArray}

//Reduce metodu ile bir dizideki tüm elemanları toplayan fonksiyon

function sumOfArray(arr) {

	return arr.reduce((sum, val) => sum + val)

}

function sumOfArray2(arr) {

	return arr.reduce((sum, val) => sum + val, 0) //İlk değer verilirse (0)

}


////////////////////////////////////////////////////////////////////////
/*
Bir dizi içindeki elemanları sayısı ile hesaplayan kod parçası
Her eleman bookName parametresine gelir
 */
function diziElemanSayisiHesapla() {
	let books = [
		"javascript",
		"javascript",
		"clojure",
		"clojure",
		"clojure",
		"java",
		"kotlin",
		"kotlin",
	]

	const firstValue = {}

	const reducer = function (obj, bookName) {
		if (!obj[bookName]) {
			obj[bookName] = 1
		} else {
			obj[bookName] = obj[bookName] + 1
		}
		return obj
	}
	const result = books.reduce(reducer, firstValue)
}

/*
	Opsiyonel reduce parametreleri:
	3. parametre : index
	4. parametre : array

	Aşağıda diziyi dönüyor son elemana kadar topluyor
	Son Elemanda ise farklı bir işlem yapıp ortalamayı buluyor:
 */

function ekstraParametreli() {

	function reducer2(acc, value, index, array) {
		let interValue = acc + value;
		if (index === array.length - 1) {
			return interValue / array.length;
		}
		return interValue;
	}

	let data = [1, 2, 3, 4, 5, 6];
	const mean = data.reduce(reducer2, 0);

	// console.log("Ortalama:", mean);
	// Ortalama: 3.5
}

/*
	Reduce ile fonksiyonları birleştirmek
 */
function metotBirlestirme() {
	function increment(input) {
		return input + 1;
	}

	function decrement(input) {
		return input - 1;
	}

	function double(input) {
		return input * 2;
	}

	let initValue = 1;

	const pipeline = [
		increment,
		double,
		decrement
	];

	const finalValue = pipeline.reduce(function (acc, fn) {
		return fn(acc);
	}, initValue);

	console.log("Son değer:", finalValue)
}

////////////////////////////////////////////////////////////////////////////////

