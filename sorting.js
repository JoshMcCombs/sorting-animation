const newDiv = document.createElement('div');
const div1 = document.querySelector('.div1');
const barWidth = 10;
const barMainColor = '#5050aa';
const barSecondaryColor = '#aa5050';
const barContainer = document.querySelector('.div1');

const initializeArray = () => {
  let array = [];
  for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 100) + 5);
  }
  return array;
}

const displayArr = initializeArray();

for (let num of displayArr) {
  const barDiv = document.createElement('div', [`height: ${num}px`, 'width: 4px']);
  barDiv.style.height = `${num}px`;
  barDiv.setAttribute('class', 'array-item');
  // barDiv.style.width = `${barWidth}px`;
  barDiv.style.backgroundColor = barMainColor;
  // barDiv.style.display = 'inline-block';
  newDiv.appendChild(barDiv);
}

// document.body.insertBefore(newDiv, div1);
// document.body.appendChild(newDiv)
barContainer.appendChild(newDiv);