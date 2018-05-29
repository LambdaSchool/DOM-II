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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const a = document.createElement('a');
const p = document.querySelector('nav').appendChild(a);
p.innerHTML = "Examples"

const l = document.createElement('a');
const m = document.querySelector('nav').appendChild(l);
m.innerHTML = "Portfolio"


let navTop= document.querySelectorAll("nav a");
navTop[0].innerHTML = siteContent["nav"]["nav-item-1"]
navTop[0].style.color = "green";
navTop[1].innerHTML = siteContent["nav"]["nav-item-2"]
navTop[1].style.color = "green";
navTop[2].innerHTML = siteContent["nav"]["nav-item-3"]
navTop[2].style.color = "green";
navTop[3].innerHTML = siteContent["nav"]["nav-item-4"]
navTop[3].style.color = "green";
navTop[4].innerHTML = siteContent["nav"]["nav-item-5"]
navTop[4].style.color = "green";
navTop[5].innerHTML = siteContent["nav"]["nav-item-6"]
navTop[5].style.color = "green";
navTop[6].style.color = "green";
navTop[7].style.color = "green";


let callToAction = document.querySelector(".cta .cta-text h1");
callToAction.innerHTML = "DOM<br>Is<br>Awesome";



let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img-src"]);

let ctaButton = document.querySelector(".cta .cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

ctaButton.addEventListener("click", () => {
  if (callToAction.innerHTML === "DOM<br>Is<br>Awesome") {
  callToAction.innerHTML = "LAMBDA SCHOOL!";
  callToAction.style.color = "red";
} else if (callToAction.innerHTML === "LAMBDA SCHOOL!") {
  callToAction.innerHTML = "DOM<br>Is<br>Awesome";
  callToAction.style.color = "black";
}

});

let topHeaders = document.querySelectorAll(".top-content .text-content h4");
topHeaders[0].innerHTML = siteContent["main-content"]["features-h4"];
topHeaders[1].innerHTML = siteContent["main-content"]["about-h4"];

let topParagraphs = document.querySelectorAll(".top-content .text-content p");
topParagraphs[0].innerHTML = siteContent["main-content"]["features-content"];
topParagraphs[1].innerHTML = siteContent["main-content"]["about-content"];

let midImage = document.getElementById("middle-img");
midImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let botHeaders = document.querySelectorAll(".bottom-content .text-content h4");
botHeaders[0].innerHTML = siteContent["main-content"]["services-h4"];
botHeaders[1].innerHTML = siteContent["main-content"]["product-h4"];
botHeaders[2].innerHTML = siteContent["main-content"]["vision-h4"];

let botParagraphs = document.querySelectorAll(".bottom-content .text-content p");
botParagraphs[0].innerHTML = siteContent["main-content"]["services-content"];
botParagraphs[1].innerHTML = siteContent["main-content"]["product-content"];
botParagraphs[2].innerHTML = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelector(".contact h4");
contactHeader.innerHTML = siteContent["contact"]["contact-h4"];


let contactParagraphs = document.querySelectorAll(".contact p");
contactParagraphs[0].innerHTML = siteContent["contact"]["address"];
contactParagraphs[1].innerHTML = siteContent["contact"]["phone"];
contactParagraphs[2].innerHTML = siteContent["contact"]["email"];

let footerStuff = document.querySelector("footer p");
footerStuff.innerHTML = siteContent["footer"]["copyright"];


