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


let navItem1 = document.querySelector("nav a");
navItem1.innerHTML = siteContent["nav"]["nav-item-1"]

let navItem2 = document.getElementsByTagName("a");
navItem2[1].innerHTML = siteContent["nav"]["nav-item-2"]

let navItem3 = document.getElementsByTagName("a");
navItem3[2].innerHTML = siteContent["nav"]["nav-item-3"]

let navItem4 = document.getElementsByTagName("a");
navItem4[3].innerHTML = siteContent["nav"]["nav-item-4"]

let navItem5 = document.getElementsByTagName("a");
navItem5[4].innerHTML = siteContent["nav"]["nav-item-5"]




let ctaText = document.querySelector(".cta-text h1");
ctaText.innerHTML = siteContent["cta"]["h1"];


let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent["cta"]["img-src"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.innerHTML = siteContent["cta"]["button"];

// Main Content

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"] ["middle-img-src"];

let topContentHeader = document.querySelectorAll(".top-content h4 ");
topContentHeader[0].innerText = siteContent["main-content"]["features-h4"];
topContentHeader[1].innerText= siteContent["main-content"] ["about-h4"];

let topContent = document.querySelectorAll(".top-content p");
topContent[0].innerHTML = siteContent["main-content"]["features-content"];
topContent[1].innerHTML = siteContent["main-content"]["about-content"];



let bottomContentHeader = document.querySelectorAll(".bottom-content h4");
bottomContentHeader[0].innerText = siteContent["main-content"]["services-h4"];
bottomContentHeader[1].innerText = siteContent["main-content"]["product-h4"];
bottomContentHeader[2].innerText = siteContent["main-content"]["vision-h4"];

let bottomContent = document.querySelectorAll(".bottom-content p");
bottomContent[0].innerHTML = siteContent["main-content"]["services-content"];
bottomContent[1].innerHTML = siteContent["main-content"] ["product-content"];
bottomContent[2].innerHTML = siteContent["main-content"] ["vision-content"];

// Contact

let contact = document.querySelector(".contact h4");
contact.innerText = siteContent["contact"]["contact-h4"];

let contactParagraph = document.querySelectorAll(".contact p");
contactParagraph[0].innerHTML = siteContent["contact"] ["address"];
contactParagraph[1].innerHTML = siteContent["contact"] ["phone"];
contactParagraph[2].innerHTML = siteContent["contact"] ["email"];

// Footer 

let footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];



// Change color of Nav to green

let navtoo = document.querySelectorAll('a');
for(let a = 0; a < navtoo.length; a++) {
  navtoo[a].setAttribute('style','color: green');
}





// Adding to Nav

selectedNavLinks = document.getElementsByTagName("nav")[0];
let createNewNode = (name) => {
  let newNode = document.createElement("a");
  newNode.innerHTML = name;
  return newNode;
}
selectedNavLinks.prepend(createNewNode("Blog"));
selectedNavLinks.append(createNewNode("Testimonials"));




// nav event listeners 







// CTA Event Listeners 
ctaText.addEventListener('mouseover',(event)=> {
event.target.innerText = "I am the Queen";
});

ctaText.addEventListener('mouseout',(event)=>{
  event.target.innerText = siteContent["cta"]["h1"]
});

ctaButton.addEventListener('mouseover',(event)=> {
  event.target.innerText = "I am the Queen";
  });

  ctaImg.addEventListener('click',(event)=>{
    event.target.style.animation = "rotate 20s";
    event.target.style.webkitAnimation = "rotate 20s";
  });


  // Main Content Event Listeners

















  
  
  
  
  





