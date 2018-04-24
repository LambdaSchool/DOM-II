const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
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
    "address" : "123 Way 456 Street Somewhere, USA",
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





//nav bar
let navBar = document.querySelectorAll("nav");

//nav link

let navLink = document.getElementsByTagName('a');
navLink[0].innerText = siteContent.nav["nav-item-1"];
navLink[1].innerText = siteContent.nav["nav-item-2"];
navLink[2].innerText = siteContent.nav["nav-item-3"];
navLink[3].innerText = siteContent.nav["nav-item-4"];
navLink[4].innerText = siteContent.nav["nav-item-5"];
navLink[5].innerText = siteContent.nav["nav-item-6"];


// append 'About' to nav bar
let node = document.createElement("a");
let textNode = document.createTextNode("About");
node.appendChild(textNode);
navBar[0].appendChild(node);

//prepend 'Info' to nav bar
let node2 = document.createElement("a");
let textNode2 = document.createTextNode("Info");
node2.prepend(textNode2);
navBar[0].prepend(node2);

//nav bar color change
navLink[0].style.color = "green";
navLink[1].style.color = "green";
navLink[2].style.color = "green";
navLink[3].style.color = "green";
navLink[4].style.color = "green";
navLink[5].style.color = "green";
navLink[6].style.color = "green";
navLink[7].style.color = "green";

//cta
let ctaH1 = document.getElementsByTagName("h1");
ctaH1[0].innerText = siteContent.cta.h1;

let ctaButton = document.getElementsByTagName("button");
ctaButton[0].innerText = siteContent.cta.button;

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent.cta['img-src']);

let midPageImg = document.getElementById("middle-img");
midPageImg.setAttribute('src', siteContent['main-content']["middle-img-src"]);

// h4 elements
let hFourElements = document.getElementsByTagName('h4');
hFourElements[0].innerHTML = siteContent['main-content']['features-h4'];
hFourElements[1].innerHTML = siteContent['main-content']['about-h4'];
hFourElements[2].innerHTML = siteContent['main-content']['services-h4'];
hFourElements[3].innerHTML = siteContent['main-content']['product-h4'];
hFourElements[4].innerHTML = siteContent['main-content']['vision-h4'];


// p elements
let pElements = document.getElementsByTagName("p");
pElements[0].innerHTML = siteContent['main-content']['features-content'];
pElements[1].innerHTML = siteContent['main-content']['about-content'];
pElements[2].innerHTML = siteContent['main-content']['services-content'];
pElements[3].innerHTML = siteContent['main-content']['product-content'];
pElements[4].innerHTML = siteContent['main-content']['vision-content'];
pElements[5].innerHTML = siteContent.contact.address;
pElements[6].innerHTML = siteContent.contact.phone;
pElements[7].innerHTML = siteContent.contact.email;
pElements[8].innerHTML = siteContent.footer.copyright; 


// DOM-II code

// event one button changes to time on click
let button1 = document.querySelector('button');

button1.addEventListener('click', () => {
  //button1.style.backgroundColor = "blue";
  button1.innerHTML = Date();
  button1.style.height = '100px';
  button1.style.backgroundColor = "Aqua";

});

//second event
logo.addEventListener('click', () => {
  alert("It's great you're here!")
 });


let c = document.getElementById("middle-img");
c.addEventListener('mouseover', () => {
//let ctx = c.getContext("2d");
ctx.rotate(20*Math.PI/180);
ctx.fillRect(50,20,100,50);
});










