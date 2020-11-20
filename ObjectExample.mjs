import {writeln} from "./ConsoleUtil.mjs";

function foo1() {
	let device = new Object()

	device.name = "Laptop"
	device.id = 11223
	device.brand = "Lenovo"

	displayDevice(device)
}

function displayDevice(dev) {
	writeln(`Device Id:${dev.id}`)
	writeln(`Device name:${dev.name}`)
	writeln(`Device port:${dev.brand}`)
}

function fooImplementations() {

	let deviceAnother = {}

	let device = {
		"id": 1,
		name: "test",
		'port': 1234,
		ip: '192.168.2.234',
		display: function () {
			writeln(`Device Id:${this.id}`)
			writeln(`Device name:${this.name}`)
			writeln(`Device port:${this.port}`)
			writeln(`Device IP:${this.ip}`)

		}
	}
}

function objectArrayExample() {

	let products = [
		{name: "laptop", stock: 6, price: 4345, toString: toString},
		{name: "mouse", stock: 40, price: 70, toString: toString},
		{name: "motherboard", stock: 5, price: 500, toString: toString},
	]

	for (let index in products)
		writeln(products[index].toString())

	products.sort(function (p1, p2) {return p1.price - p2.price})


}