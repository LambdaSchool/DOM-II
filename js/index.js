// Your code goes here

//Fun Bus text transformed when scrolling up and down
const titleH1 = document.querySelector('h1');

window.addEventListener('wheel', e => {
  if(e.wheelDelta === -120) {
    titleH1.textContent = 'Weeeeeeeee';
  } else {
    titleH1.textContent = 'Woooooooooo';
  }
});

//Nav items random colors

const navItems = document.querySelectorAll('a');
navItems.forEach(item => {
  item.addEventListener('mousemove', _ => {
    item.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
  });

  item.addEventListener('click', e => {
    e.preventDefault();
  });
});


//Sign Me Up Buttons Random Colors
const btn = document.querySelectorAll('.btn');
btn[0].addEventListener('mouseover', _ => {
  btn[0].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
});

btn[1].addEventListener('mouseover', _ => {
  btn[1].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
});

btn[2].addEventListener('mouseover', _ => {
  btn[2].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
});

//Double click paragraphs


const allPara = document.querySelectorAll('p');

allPara[1].addEventListener('dblclick', e => {
  allPara[1].textContent += ' OUCH! STOP POKING ME '
});

//Makes sign up button functional upon double click
const button = document.querySelectorAll('.btn');
    button.forEach(node => {node.addEventListener('dblclick', function(){let name = prompt('Enter your name'); let email = prompt('Enter your email'); alert(`Thank you for signing up, ${name}! We will be contacting you shortly.`);})});


// Bottom buttons change text after mouse out

  btn[0].addEventListener('mouseout', _ => {
    btn[0].textContent = 'Baby come back';
  });


  btn[1].addEventListener('mouseout', _ => {
    btn[1].textContent = 'you can blame it';
  });


  btn[2].addEventListener('mouseout', _ => {
    btn[2].textContent = 'all on me';
  });

  
//Changes text of H2 when copied

const copyTitle = document.querySelector('h2');
copyTitle.addEventListener('copy', _ => {
  copyTitle.textContent = 'Y U DO DIS'
});


// Welcome pop up on page load

window.addEventListener('load', e => {
    alert(`Welcome!`)
  });
