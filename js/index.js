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

let headerNavAppend = document.querySelector("nav"); 
let headerNav = document.querySelectorAll("nav a");
let ctaContent = document.querySelector(".cta-text h1");
let ctaContentButton = document.querySelector(".cta-text button");
let ctaImg = document.querySelector("#cta-img");
let mainContentTopContentH = document.querySelectorAll(".top-content .text-content h4");
let mainContentTopContentP = document.querySelectorAll(".top-content .text-content p");
let middleImg = document.querySelector("#middle-img");
let bottomContentH = document.querySelectorAll(".bottom-content .text-content h4");
let bottomContentP = document.querySelectorAll(".bottom-content .text-content p");
let contactH = document.querySelector(".contact h4");
let contactP = document.querySelectorAll(".contact p");
let footer = document.querySelector("footer p");

headerNav[0].innerText = siteContent["nav"]["nav-item-1"];
headerNav[1].innerText = siteContent["nav"]["nav-item-2"];
headerNav[2].innerText = siteContent["nav"]["nav-item-3"];
headerNav[3].innerText = siteContent["nav"]["nav-item-4"];
headerNav[4].innerText = siteContent["nav"]["nav-item-5"];
headerNav[5].innerText = siteContent["nav"]["nav-item-6"];

ctaContent.innerText = siteContent["cta"]["h1"];
ctaContentButton.innerText = siteContent["cta"]["button"];
ctaImg.src = siteContent["cta"]["img-src"];

mainContentTopContentH[0].innerText = siteContent["main-content"]["features-h4"];
mainContentTopContentP[0].innerText = siteContent["main-content"]["features-content"];

mainContentTopContentH[1].innerText = siteContent["main-content"]["about-h4"];
mainContentTopContentP[1].innerText = siteContent["main-content"]["about-content"];

middleImg.src = siteContent["main-content"]["middle-img-src"];

bottomContentH[0].innerText = siteContent["main-content"]["services-h4"];
bottomContentP[0].innerText = siteContent["main-content"]["services-content"];

bottomContentH[1].innerText = siteContent["main-content"]["product-h4"];
bottomContentP[1].innerText = siteContent["main-content"]["product-content"];

bottomContentH[2].innerText = siteContent["main-content"]["vision-h4"];
bottomContentP[2].innerText = siteContent["main-content"]["vision-content"];

contactH.innerText = siteContent["contact"]["contact-h4"];
contactP[0].innerText = siteContent["contact"]["address"];
contactP[1].innerText = siteContent["contact"]["phone"];
contactP[2].innerText = siteContent["contact"]["email"];

footer.innerText = siteContent["footer"]["copyright"];

headerNav[0].style.color = "green";
headerNav[1].style.color = "green";
headerNav[2].style.color = "green";
headerNav[3].style.color = "green";
headerNav[4].style.color = "green";
headerNav[5].style.color = "green";


//=======BEGIN EVENT LISTENERS ==============// 

//Number 1
contactH.addEventListener('click', (event) =>{ event.target.style.color = "blue";
});

//Number 2
let mouseOver = document.querySelector(".background-mouseover");
mouseOver.addEventListener('mouseover', (event) =>{event.target.style.backgroundColor = "yellow";
});

//Number 3
let dblClick = document.querySelector(".background-mouseover");
dblClick.addEventListener('dblclick', (event) =>{event.target.style.color = "orange";
});

//Number 4
let auxClick = document.querySelector(".background-mouseover");
auxClick.addEventListener('auxclick', (event) =>{
event.target.style.visibility = "hidden";
event.target.style.backgroundColor = "white";
});

//Number 5
let wheel = document.querySelector(".box1");
wheel.addEventListener('wheel', (event) =>{
  event.target.style.visibility = "visible";
  event.target.style.border = "5px solid black";
});

let wheel2 = document.querySelector(".box2");
wheel2.addEventListener('wheel', (event) =>{
  event.target.style.border = "5px solid black";
});

//Number 6
var dragText;
document.addEventListener('drag', (event) => {

}, false);

//Number 7
document.addEventListener('dragstart', (event) => {
dragText = event.target;

  event.target.style.opacity = .5;
}, false);

//Number 8
document.addEventListener('dragend', (event) => {
  event.target.style.opacity = "";
}, false);

//Number 9
document.addEventListener('dragover', (event) => {
  event.preventDefault();
}, false);

//Number 10
document.addEventListener('dragenter', (event) => {
 if(event.target.className === "dropzone"){
   event.target.style.background = "purple";
 }
}, false);

//Number 11
document.addEventListener('dragleave', (event) => {
  if(event.target.className === "dropzone"){
    event.target.style.background = "";
  }
 }, false);

//Number 12
 document.addEventListener('drop', (event) => {
   event.preventDefault();

  if(event.target.className === "dropzone"){
    event.target.style.background = "";
    dragText.parentNode.removeChild(dragText);
    event.target.appendChild(dragText);
  }
 }, false);


