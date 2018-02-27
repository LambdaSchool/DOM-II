let redBlock = document.getElementsByClassName('block--red')[0];
let blueBlock = document.getElementsByClassName('block--blue')[0];
let greenBlock = document.getElementsByClassName('block--green')[0];
let pinkBlock = document.getElementsByClassName('block--pink')[0];
let grayBlock = document.getElementsByClassName('block--gray')[0];

let count = -1;

function rocket(e) {
  e.target.style.order = count;
  count--;
}

redBlock.addEventListener('click', rocket);
blueBlock.addEventListener('click', rocket);
greenBlock.addEventListener('click', rocket);
pinkBlock.addEventListener('click', rocket);
grayBlock.addEventListener('click', rocket);

