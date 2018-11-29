sortNum = (num) => {
	num.sort((a, b) => {
		if(a === b) {
			return 0
		}
		return a < b ? -1 : 1
	)}
}

const num = [19, 3, 81, 1, 24, 21]
sortNum(num)
console.log(num)
