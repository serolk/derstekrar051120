
export function writeln(str) {
	return write(`${str}\n`)
}

export function write(str){
	return process.stdout.write(str)
}

