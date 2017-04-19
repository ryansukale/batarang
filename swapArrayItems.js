function swapArrayItems(arr, idx1, idx2) {
	const arrCopy = arr.slice();
	const temp = arrCopy[idx1];
	arrCopy[idx1] = arrCopy[idx2];
	arrCopy[idx2] = temp;
	return arrCopy;
}

module.exports = swapArrayItems;