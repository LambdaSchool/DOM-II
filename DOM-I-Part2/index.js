const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM<br> Is<br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street<br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update navbar
let navBar = document.querySelectorAll('nav a');
navBar[0].innerHTML = 'Services';
navBar[1].innerHTML = 'Product';
navBar[2].innerHTML = 'Vision';
navBar[3].innerHTML = 'Features';
navBar[4].innerHTML = 'About';
navBar[5].innerHTML = 'Contact';

// Update CTA section
let ctaText = document.querySelector('.cta-text h1');
ctaText.innerHTML = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.innerHTML = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

// Update main content
let topContentHead = document.querySelectorAll('.top-content .text-content h4');
topContentHead[0].innerHTML = siteContent['main-content']['features-h4'];
topContentHead[1].innerHTML = siteContent['main-content']['about-h4'];

let topContentText = document.querySelectorAll('.top-content .text-content p');
topContentText[0].innerHTML = siteContent['main-content']['features-content'];
topContentText[1].innerHTML = siteContent['main-content']['about-content'];

let trailer = document.getElementById('middle-img');
trailer.setAttribute('src', siteContent['main-content']['middle-img-src'])

let bottomContentHeads = document.querySelectorAll('.bottom-content .text-content h4');
let bottomContentText = document.querySelectorAll('.bottom-content .text-content p');
bottomContentHeads[0].innerHTML = siteContent['main-content']['services-h4'];
bottomContentHeads[1].innerHTML = siteContent['main-content']['product-h4'];
bottomContentHeads[2].innerHTML = siteContent['main-content']['vision-h4'];
bottomContentText[0].innerHTML = siteContent['main-content']['services-content'];
bottomContentText[1].innerHTML = siteContent['main-content']['product-content'];
bottomContentText[2].innerHTML = siteContent['main-content']['vision-content'];

let contactHead = document.querySelector('.contact h4');
let contactBody = document.querySelectorAll('.contact p');
contactHead.innerHTML = siteContent['contact']['contact-h4'];
contactBody[0].innerHTML = siteContent['contact']['address'];
contactBody[1].innerHTML = siteContent['contact']['phone'];
contactBody[2].innerHTML = siteContent['contact']['email'];

// Footer
let footer = document.querySelector('footer p');
footer.innerHTML = siteContent['footer']['copyright']

// New element creation
let navPartner = document.createElement('a');
navPartner.innerHTML = 'Partners';

let navBlog = document.createElement('a');
navBlog.innerHTML = 'Blog';

// adding new elements to Nav
let navSelector = document.querySelector('nav');
navSelector.appendChild(navPartner);
navSelector.prepend(navBlog);

// assigning new color and giving new nav items the href
let navBarColor = document.querySelectorAll('nav a');
navBarColor.forEach(i => i.style.color = 'green');
navBarColor.forEach(i => i.href = '#');

//--1st event
ctaImg.addEventListener('click', (event) => {
  event.target.style.transform = 'rotate(90deg)';
  event.stopPropagation();
});

//--2nd event
ctaText.addEventListener('wheel', (event) => {
  event.target.style.color = 'purple';
});

//----------Not working-----------------
const container = document.querySelector('.container');
container.addEventListener('select', (event) => {
  footer.style.backgroundColor = 'green';
}); //----------Not working-----------------

//--3rd event
container.addEventListener('click', (event) => {
  footer.style.color = 'green';
  footer.style.fontSize = '200%';
});

//--4th event
const contentHeaders = document.querySelectorAll('.text-content h4');
contentHeaders.forEach(i => i.addEventListener('mouseover', (event) => {
  event.target.style.color = 'LawnGreen';
  i.style.fontSize = '200%';
  }));

  //--5th event
contentHeaders.forEach(i => i.addEventListener('mouseleave', (event) => {
  event.target.style.color = 'black';
  i.style.fontSize = '100%';
  }));

  //--6th event
navBarColor.forEach(i => i.addEventListener('mouseover', (event) => {
  event.target.style.fontSize = '250%';
  event.target.style.color = 'SlateBlue';
}));

//--7th event
navBarColor.forEach(i => i.addEventListener('mouseleave', (event) => {
  event.target.style.fontSize = '101%';
  event.target.style.color = 'Green';
}));

//---8th event
const featuresContent = document.querySelector('.top-content .text-content .features-content');
featuresContent.addEventListener('click', (event) => {
  event.target.innerText = reverseCase(event.target.innerText)
})

//---9th event
const contentPs = document.querySelectorAll('.text-content p');
contentPs.forEach(i => i.addEventListener('dblclick', (event) => {
  event.target.innerText = reverseString(event.target.innerText)
  }));

  //--10th event
ctaImg.addEventListener('dblclick', (event) => {
  event.target.style.transform = 'rotate(180deg)';
  event.stopPropagation();
});

//-- string functions borrowed from previous code challenges
function reverseCase(str) {
  let reversed = [];
  str.split('');
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === str[i].toUpperCase()) {
      reversed.unshift(str[i].toLowerCase());
    } else reversed.unshift(str[i].toUpperCase());
  } return reversed.join('');
}

function reverseString(str) {
  return str.split('').reverse().join('');
}