let str = "Bugun kahve ictim kotu oldum"

let len = str.length

let chr = str.charAt(2) //2 nolu indexteki karakter elde edilir.

let str2 = " birlestirilecek"

let birlestirilmis = str.concat(str2)

/*
indexOf metodu ile bir yazı içerisinde başka bir yazı aranabilir.
Bu durumda metot yazı bulunursa ilk bulunan yazının ilk karakterinin index numarası, bulunamazsa -1 değeri döndürür:
indexOf metoduna ikinci argüman olarak aramaya hangi indeksten başlayacağı bilgisi geçilebilir:
 */
let result = str.indexOf("kahve")
result = str.indexOf("kahve", 9)


/*
Parametresi ile aldığı birinci yazının içerisinde parametresi ile aldığı ikinci yazıdan kaç tane olduğunu
döndüren countString isimli fonksiyonu
 */
function countString(s1, s2)
{
	let count = 0
	let index = -1

	for (; (index = s1.indexOf(s2, index + 1)) !== -1; ++count)
		;

	return count
}
