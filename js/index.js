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

//========================= Nav Items ==================================

let navItem = document.querySelectorAll("header nav a"); 
navItem[0].innerHTML = siteContent["nav"]["nav-item-1"];
navItem[1].innerHTML = siteContent["nav"]["nav-item-2"];
navItem[2].innerHTML = siteContent["nav"]["nav-item-3"];
navItem[3].innerHTML = siteContent["nav"]["nav-item-4"];
navItem[4].innerHTML = siteContent["nav"]["nav-item-5"];
navItem[5].innerHTML = siteContent["nav"]["nav-item-6"];

navItem.forEach(i => i.style.color = "green");


navItem = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
} // Function to create new nodes nested inside the nav

navItem.prepend(createNewNode("Is it working?"));
navItem.append(createNewNode("Now is working!"));



//============================CTA Items ===============================

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaHeader = document.querySelector(".cta .cta-text h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta .cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];



// ============================= Main Content ============================

let topContentTitle = document.querySelectorAll(".top-content .text-content h4");
topContentTitle[0].innerHTML = siteContent["main-content"]["features-h4"];
topContentTitle[1].innerHTML = siteContent["main-content"]["about-h4"];

let topContentText = document.querySelectorAll(".top-content .text-content p");
topContentText[0].innerHTML = siteContent["main-content"]["features-content"];
topContentText[1].innerHTML = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let bottomContentTitle = document.querySelectorAll(".bottom-content .text-content h4");
bottomContentTitle[0].innerHTML = siteContent["main-content"]["services-h4"];
bottomContentTitle[1].innerHTML = siteContent["main-content"]["product-h4"];
bottomContentTitle[2].innerHTML = siteContent["main-content"]["vision-h4"];

let bottomContentText = document.querySelectorAll(".bottom-content .text-content p");
bottomContentText[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContentText[1].innerHTML = siteContent["main-content"]["product-content"];
bottomContentText[2].innerHTML = siteContent["main-content"]["vision-content"];



// ========================= Bottom Content ============================

let contactInfoTitle = document.querySelector(".contact h4");
contactInfoTitle.innerHTML = siteContent["contact"]["contact-h4"];

let contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].innerHTML = siteContent["contact"]["address"];
contactInfo[1].innerHTML = siteContent["contact"]["phone"];
contactInfo[2].innerHTML = siteContent["contact"]["email"];



// ========================= Footer ==================================

let footerInfo = document.querySelector("footer p");
footerInfo.innerHTML = siteContent["footer"]["copyright"];



// ========================= Event Listeners ========================

const customButton = document.querySelector(".cta .cta-text button");
customButton.addEventListener("click", (event) => {
  event.target.parentElement.parentElement.parentElement.style.display = "none";
  alert("WOOOOOOOAAH! SELF DESTRUCT!!");
  event.stopPropagation();
});


function changeImg () {
  let ctaImg = document.getElementById("cta-img");

  if (ctaImg.src == "file:///Users/luissalazar/Documents/LambdaSchool/DOM-II/img/header-img.png") {
    ctaImg.src = "file:///Users/luissalazar/Documents/LambdaSchool/DOM-II/img/mid-page-accent.jpg";
  } 
  else if (ctaImg.src == "file:///Users/luissalazar/Documents/LambdaSchool/DOM-II/img/mid-page-accent.jpg") {
    ctaImg.src = "file:///Users/luissalazar/Documents/LambdaSchool/DOM-II/img/logo.png";
  }
  else {
    ctaImg.src = "file:///Users/luissalazar/Documents/LambdaSchool/DOM-II/img/header-img.png";
  }
};


const disappearProduct = document.getElementById("productInfo");
disappearProduct.addEventListener("click", (event) => {
  event.target.parentElement.style.display = "none";
  alert("WHAT DID YOU JUST DO!?");
  event.stopPropagation();
});

const disappearServices = document.getElementById("servicesInfo");
disappearServices.addEventListener("mouseover", (event) => {
  event.target.parentElement.style.display = "none";
  alert("REALLY???");
  event.stopPropagation();
});

const disappearVision = document.getElementById("visionInfo");
disappearVision.addEventListener("mouseover", (event) => {
  event.target.parentElement.style.display = "none";
  alert("AGAIN!?");
  event.stopPropagation();
});


