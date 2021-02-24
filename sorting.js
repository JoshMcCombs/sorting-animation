let newDiv, displayArr;
const barWidth = 10;
const barMainColor = '#5050aa';
const barSecondaryColor = '#aa5050';
const barContainer = document.querySelector('.sorting-container');

window.onload = function () {
  displayArr = initializeArray();
  init();
};

const init = () => {
  newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'sorting-box');
  barContainer.appendChild(newDiv);
  displayArray();
}

const initializeArray = () => {
  let array = [];
  for (let i = 0; i < 60; i++) {
    array.push(Math.floor(Math.random() * 100) + 5);
  }
  return array;
}

let displayArray = () => {
  for (let num of displayArr) {
    const barDiv = document.createElement('div');
    barDiv.style.height = `${num}px`;
    barDiv.setAttribute('class', 'array-item');
    barDiv.style.backgroundColor = barMainColor;
    newDiv.appendChild(barDiv);
  }
}

let cleanUp = () => {
  let bars = document.getElementsByClassName('sorting-box');
  while (bars.length > 0) {
    bars[0].parentNode.removeChild(bars[0]);
  }
}

const newArrClickHandler = () => {
  cleanUp();
  displayArr = initializeArray();
  init();
}