


//Elipsis Parametreli Fonksiyonlar:
//Ellipsis parametresi fonksiyonun son parametresi olmak zorundadır
//bir fonksiyonun iki tane ellipsis parametresi olamaz
//Ellipsis parameter bir Array referansı gibi düşünülebilir
function foo(...args)
{
	for (let arg of args)
		writeln(arg)
}
