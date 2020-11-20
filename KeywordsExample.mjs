import {writeln} from "./ConsoleUtil.mjs";

export function nesneTipi(val) {
	return typeof val //typeof(val)
}

export function switchExample(val) {

	switch (val) {
		case 1:
			writeln("Bir")
		case 2:
			writeln("İki")
			break
		default:
			writeln("Default")


	}

}