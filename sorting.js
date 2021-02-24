// const newDiv = document.createElement('div');
let newDiv, displayArr;
const barWidth = 10;
const barMainColor = '#5050aa';
const barSecondaryColor = '#aa5050';
const barContainer = document.querySelector('.sorting-container');

window.onload = function () {
  init();
  console.log('loaded')
};

const init = () => {
  newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'sorting-box');
  displayArr = initializeArray();
  // newDiv.setAttribute('id', 'sorting-box');
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

// let displayArr = initializeArray();

let displayArray = () => {
  for (let num of displayArr) {
    const barDiv = document.createElement('div');
    barDiv.style.height = `${num}px`;
    barDiv.setAttribute('class', 'array-item');
    barDiv.style.backgroundColor = barMainColor;
    newDiv.appendChild(barDiv);
  }
  console.log('display')
}

let cleanUp = () => {
  let bars = document.getElementsByClassName('sorting-box');
  while (bars.length > 0) {
    bars[0].parentNode.removeChild(bars[0]);
  }
}


const newArray = () => {
  cleanUp();
  console.log('clicked')
  init();
  // displayArray();
}