export const isEmptyObject = (object) => {
	for (var key in object) {
		if (object.hasOwnProperty(key)) return false
	}
	return true
}
