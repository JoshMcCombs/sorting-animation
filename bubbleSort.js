const bars = document.getElementsByClassName('array-item');

let colorChange = (num) => {
  bars[num].style.backgroundColor = barSecondaryColor;
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const bubbleSort = array => {
  for (let i = array.length; i > 0; i--) {
    let noSwaps = true;
    displayArr[i]
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, (j + 1))
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

const bubbleSortHelper = () => {

}
