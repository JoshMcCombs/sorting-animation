let bars = document.getElementsByClassName('array-item');

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

const bubbleAnimation = (arr) => {
  for (let i = arr.length; i > 0; i--) {
    subBubble(arr, i);
  }
}

const subBubble = (arr, num) => {
  for (let i = 0; i < num; i++) {
    setTimeout(() => {
      compare(arr, i)
    }, 0);
  }
  function compare(arr, i) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
    cleanUp();
    init();
  }
}

// Maybe add color on compared indexes
// In swap?