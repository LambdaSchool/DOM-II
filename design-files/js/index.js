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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//=========NAVBAR===========
let navBar = document.getElementsByTagName("a");
console.log(navBar[0].innerHTML);
navBar[0].innerHTML = 'Services';
navBar[1].innerHTML = 'Product';
navBar[2].innerHTML = 'Vision';
navBar[3].innerHTML = 'Features';
navBar[4].innerHTML = 'About';
navBar[5].innerHTML = 'Contact';


//====CTA Section============
let ctaSection = document.getElementsByClassName("cta-text")[0];
ctaSection.getElementsByTagName("h1")[0].innerHTML = siteContent["cta"]["h1"];
ctaSection.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]["button"];

//button eventlistner
let myButton = document.querySelector('.custom-button');
myButton.addEventListener("click", (e) => {
  console.log("Clicked button");
});

let ctaLogo = document.getElementById("cta-img"); 
ctaLogo.setAttribute('src', siteContent['cta']["img-src"]);

//==========MAIN Section============
//Logo section
let mainLogo = document.getElementById("middle-img");
mainLogo.setAttribute('src', siteContent['main-content']["middle-img-src"]);
//logo eventlistner
let myLogo = document.querySelector("#cta-img");
myLogo.addEventListener("click", (e) => {
  //console.log('clicked CTA-img');
  myLogo.classList.hidden 
});

let mainTextContent = document.querySelectorAll(".text-content");
//Features Section
mainTextContent[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
mainTextContent[0].getElementsByTagName("p")[0].innerHTML  = siteContent["main-content"]["features-content"];

//About Section
mainTextContent[1].getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["about-h4"];
mainTextContent[1].getElementsByTagName('p')[0].innerHTML  = siteContent["main-content"]["about-content"];

//Services Section
mainTextContent[2].getElementsByTagName('h4')[0].innerHTML = siteContent["main-content"]["services-h4"];
mainTextContent[2].getElementsByTagName('p')[0].innerHTML  = siteContent["main-content"]["services-content"];

//Product Section
mainTextContent[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
mainTextContent[3].getElementsByTagName("p")[0].innerHTML  = siteContent["main-content"]["product-content"];


//Vision Section
mainTextContent[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"]
mainTextContent[4].getElementsByTagName("p")[0].innerHTML  = siteContent["main-content"]["vision-content"]

//=======Contact Section=======
let contactList = document.getElementsByClassName("contact")[0];

contactList.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"];
contactList.getElementsByTagName("p")[0].innerHTML  = siteContent["contact"]["address"];
contactList.getElementsByTagName("p")[1].innerHTML  = siteContent["contact"][["phone"]];
contactList.getElementsByTagName("p")[2].innerHTML  = siteContent["contact"]["email"];

//======Footer========
let lastFooter = document.getElementsByTagName("footer")[0];

lastFooter.getElementsByTagName('p')[0].innerHTML = siteContent["footer"]["copyright"];

console.log("text-content", topContent);
