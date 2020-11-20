import {write} from "../ConsoleUtil";


function implementations() {

	let names = ["ali", "veli", "selami"]
	let nums = new Array()
	let surnames = []

}

function arraySort() {
	let arr = [3, 6, 2, 8, 5, 0, 3, 1, 6, 98, 232, 12]
	//Parametresiz sort yazıya göre sıralama yapar

	write(arr.sort())

	write(arr.sort((x, y) => x - y))

}

/*
Slice metodu bir diziden alt dizi oluşturur
indexlerine negatif değerler verilebilir. negatif index değerleri için dizinin uzunluğu ile toplandığında
elde edilen aralıktaki değerleri verir.
 */
function sliceExample() {

	let arr = [3, 6, 2, 8, 5, 0, 3, 1, 6, 98, 232, 12]

	let sliced = arr.slice(2, 5) //[2, 5) 2.elemandan 4.eleman dahil alt diziyi al

}

function indexOfExample() { //Array nesnesinin indexOf fonksiyonu ile aranacak elemanın index numarası elde edilebilir. Eğer bulunamazsa -1 değerine döner:

	let arr = [3, 6, 2, 8, 5, 0, 3, 1, 6, 98, 232, 12]
	let index = arr.indexOf(6) //dizideki ilk 6 değerli elemanın indexini verir

	let ind = arr.indexOf(6, 2) //2. 6 nın indexini döner
}

//Parametresi ile aldığı bir dizi ve dizi içerisindeki eleman için, o elemanın dizide kaç tane olduğunu döndüren getCount isimli fonksiyonu:
function getMemberCount(arr, val) {

	let count = 0
	let index = -1

	while ((index = arr.indexOf(val, index + 1)) != -1) {
		++count
	}

	return count
}

function getCount2(array, val) {
	let count = 0

	for (let index = -1; (index = array.indexOf(val, index + 1)) != -1; ++count)
		;

	return count
}

function getCount3(array, val) {
	let count = 0

	for (let index = 0; (index = array.indexOf(val, index)) != -1; ++count, ++index)
		;

	return count
}

function  findExample() { //Array nesnesinin find fonksiyonu ile belirli koşula uygun olan ilk eleman bulunabilir:

	let numbers = [1, 2, 3, 4, 5]
	let result = numbers.find(val => val % 2 === 0) //koşula uyan bir eleman yoksa undefined döner
	//aşağıdaki gibi de kullanılabilir:
	result = numbers.find((val, index)=> val % 2 === 0 && index > 2)

}

function findIndexExample() {
//findIndex fonksiyonu ile belirli bir koşula uyan ilk elemanın index numarası elde edilebilir. Eğer koşula uyan eleman bulunamazsa -1 döner:
	let numbers = [1, 2, 3, 4, 5]

	let index = numbers.findIndex(val => val % 2 === 0)

	//Ya da :

	let people = [new Person(1, "oğuz"), new Person(2, "muhammed"), new Person(3, "oğuzhan")]
	let ind = people.findIndex(per => per.id == 2)

	writeln(ind != -1 ? `${ind} numaralı indekste ${people[ind].toString()} bulundu` : "Bulunamadı")
	
}

function everyExample() {
//every metodu dizinin tüm elemanları belirli koşula uyarsa true bir tane bile uymayan eleman varsa false değeri ile döner:

	let numbers = [10, 20, 30, 4, 58]

	if (numbers.every(val => val % 2 === 0))
		writeln("Tüm sayılar çift")
	else
		writeln("en az bir tane çift olmayan sayı var")
}

function someExample() {
//some fonksiyonu belirlenen koşula uyan hiç eleman yoksa false değerini döndürür. Koşula uyan en az bir tane eleman varsa true döner:

	let numbers = [1, 21, 30, 41, 5]

	if (numbers.some(val => val % 2 == 0))
		writeln("En az bir tane çift sayı var")
	else
		writeln("Hiç çift yok")

}

function filterExample() {
//filter metodu parametresi ile aldığı koşula uyan elemanlardan oluşan diziyi verir:

	let cities = ["ankara", "istanbul", "izmir", "muş", "bolu"]
	let result = cities.filter(city => city.length > 4)


}
