/* Rockets */

const redElement = document.querySelector('.block--red');
const blueElement = document.querySelector('.block--blue');
const greenElement = document.querySelector('.block--green');
const pinkElement = document.querySelector('.block--pink');
const grayElement = document.querySelector('.block--gray');

redElement.style.order = '1';
blueElement.style.order = '2';
greenElement.style.order = '3';
pinkElement.style.order = '4';
grayElement.style.order = '5';

let highOrder = 6;

const lower = (event) => {
    event.target.style.order = highOrder;
    highOrder++;
}

redElement.addEventListener('click', lower);
blueElement.addEventListener('click', lower);
greenElement.addEventListener('click', lower);
pinkElement.addEventListener('click', lower);
grayElement.addEventListener('click', lower);