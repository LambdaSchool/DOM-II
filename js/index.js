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

let navElements = document.querySelectorAll('a');
navElements[0].innerHTML = siteContent["nav"]["nav-item-1"];
navElements[1].innerHTML = siteContent["nav"]["nav-item-2"];
navElements[2].innerHTML = siteContent["nav"]["nav-item-3"];
navElements[3].innerHTML = siteContent["nav"]["nav-item-4"];
navElements[4].innerHTML = siteContent["nav"]["nav-item-5"];
navElements[5].innerHTML = siteContent["nav"]["nav-item-6"];

let ctaImg = document.querySelector('.cta img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaH1 = document.querySelector('.cta h1');
ctaH1.innerHTML = siteContent["cta"]["h1"];

let ctaBtn = document.querySelector('.cta button');
ctaBtn.innerHTML = siteContent["cta"]["button"];

let h4Elements = document.querySelectorAll('h4');
h4Elements[0].innerHTML = siteContent["main-content"]["features-h4"];
h4Elements[1].innerHTML = siteContent["main-content"]["about-h4"];
h4Elements[2].innerHTML = siteContent["main-content"]["services-h4"];
h4Elements[3].innerHTML = siteContent["main-content"]["product-h4"];
h4Elements[4].innerHTML = siteContent["main-content"]["vision-h4"];

h4Elements[5].innerHTML = siteContent["contact"]["contact-h4"];

let pElements = document.querySelectorAll('p');
pElements[0].innerHTML = siteContent["main-content"]["features-content"];
pElements[1].innerHTML = siteContent["main-content"]["about-content"];
pElements[2].innerHTML = siteContent["main-content"]["services-content"];
pElements[3].innerHTML = siteContent["main-content"]["product-content"];
pElements[4].innerHTML = siteContent["main-content"]["vision-content"];

pElements[5].innerHTML = siteContent["contact"]["address"];
pElements[6].innerHTML = siteContent["contact"]["phone"];
pElements[7].innerHTML = siteContent["contact"]["email"];

pElements[8].innerHTML = siteContent["footer"]["copyright"];

let middleImg = document.querySelector('.middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


