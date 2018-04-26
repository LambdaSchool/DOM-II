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
  // let logo = document.getElementById("logo-img");
  // logo.setAttribute('src', siteContent["nav"]["img-src"]);

  let headerNavA = document.querySelectorAll("header nav a");

  for(var i = 0; i < headerNavA.length; i ++) {
    headerNavA[i].innerHTML = siteContent["nav"]["nav-item-" + (i + 1)];
  }

  let imgLogo = document.getElementById("logo-img");
  imgLogo.setAttribute("src", siteContent["nav"]["img-src"]);

  let ctaH1 = document.querySelector(".cta .cta-text h1");
  ctaH1.innerHTML = siteContent["cta"]["h1"];

  let ctaButton = document.querySelector(".cta .cta-text button");
  ctaButton.innerHTML = siteContent["cta"]["button"];

  let ctaImg = document.getElementById("cta-img");
  ctaImg.src = siteContent["cta"]["img-src"];

  let featuresH4 = document.querySelectorAll(".main-content .top-content .text-content h4");
  featuresH4[0].innerHTML = siteContent["main-content"]["features-h4"];

  let featuresP = document.querySelectorAll(".main-content .top-content .text-content p");
  featuresP[0].innerHTML = siteContent["main-content"]["features-content"];

  let aboutH4 = document.querySelectorAll(".main-content .top-content .text-content h4");
  aboutH4[1].innerHTML = siteContent["main-content"]["about-h4"];

  let aboutP = document.querySelectorAll(".main-content .top-content .text-content p");
  aboutP[1].innerHTML = siteContent["main-content"]["about-content"];

  let middleImg = document.getElementById("middle-img");
  middleImg.src = siteContent["main-content"]["middle-img-src"];

  let servicesH4 = document.querySelectorAll(".bottom-content .text-content h4")[0];
  servicesH4.innerHTML = siteContent["main-content"]["services-h4"];

  let servicesP = document.querySelectorAll(".bottom-content .text-content p")[0];
  servicesP.innerHTML = siteContent["main-content"]["services-content"];

  let productH4 = document.querySelectorAll(".bottom-content .text-content h4")[1];
  productH4.innerHTML = siteContent["main-content"]["product-h4"];

  let productP = document.querySelectorAll(".bottom-content .text-content p")[1];
  productP.innerHTML = siteContent["main-content"]["product-content"];

  let visionH4 = document.querySelectorAll(".bottom-content .text-content h4")[2];
  visionH4.innerHTML = siteContent["main-content"]["vision-h4"];

  let visionP = document.querySelectorAll(".bottom-content .text-content p")[2];
  visionP.innerHTML = siteContent["main-content"]["vision-content"];

  let contactH4 = document.querySelector(".contact h4");
  contactH4.innerHTML = siteContent["contact"]["contact-h4"];

  let contactAddress = document.querySelectorAll(".contact p")[0];
  contactAddress.innerHTML = siteContent["contact"]["address"];

  let contactPhone = document.querySelectorAll(".contact p")[1];
  contactPhone.innerHTML = siteContent["contact"]["phone"];

  let contactEmail = document.querySelectorAll(".contact p")[2];
  contactEmail.innerHTML = siteContent["contact"]["email"];

  let copyRight= document.querySelector("footer p");
  copyRight.innerHTML = siteContent["footer"]["copyright"];

  let headerNav = document.querySelector("header nav"); // header nav

  let innovation = document.createElement("a"); // created a tag
  innovation.innerHTML = "Innovation";  // added innovation to a innerHtml
  innovation.href = "#"; // add href to a tag
  headerNav.appendChild(innovation); // header nav appendchild innovation

  let home = document.createElement("a");
  home.innerHTML = "Home";
  home.href = "#";
  headerNav.prepend(home);

  headerNavA = document.querySelectorAll("header nav a");  // select all a in the header nav to a node list
  headerNavA.forEach(navItem => {     // iterate through nav nodelist
    navItem.style.color = "green";    // each item reasisgn the color of a to green
  });

  //Stretch task starts here.
  ctaButton.style.backgroundColor = "blue";
  ctaButton.style.color = "white";

  let body = document.querySelector("body");
  body.style.backgroundColor = "pink";

  ctaH1.style.fontSize = "100px";
  ctaH1.style.color = "white";
  ctaH1.style.textShadow = "5px 5px black";

  setInterval(function(){            // added a setInterval to toggle color green and white every second
    if(ctaH1.style.color === "green") {
      ctaH1.style.color = "white";
    } else {
    ctaH1.style.color = "green";
    }
  }, 1000);

  // DOM II starts here

ctaButton.addEventListener("click", function(){  // added click eventListener to the cta button
  TweenMax.from(ctaImg, 3, {
    marginLeft: 400,
    rotation: 720,
    scale: 0.3
  });
});

let contactBtn = document.querySelector(".contact .contact-btn");

contactBtn.addEventListener("click", function() {
  TweenMax.to(contactH4, 1, {color: "red", opacity: 1, x: "40%"});
  TweenMax.to(contactAddress, 1, {color: "red", opacity: 1, x: "40%"});
  TweenMax.to(contactPhone, 1,{color: "red", opacity: 1, x: "40%"});
  TweenMax.to(contactEmail, 1, {color: "red", opacity: 1, x: "40%"});
  TweenMax.to(contactBtn, 1, {opacity: 0});
});

copyRight.addEventListener("mouseover", function() {
  TweenMax.to(copyRight, 2, {color: "blue", scale: 2, padding: 10, marginBottom: 50});
});

imgLogo.addEventListener('mouseenter', function(){ //added mouse enter eventListener to the img logo
  TweenMax.from(imgLogo, 3, {
    x:400,
    ease:Back.easeOut
  });
});


ctaImg.addEventListener('dblclick', function(){ // added dblclick eventListener to the cta img
  TweenMax.staggerFrom(headerNavA, 3, {
    opacity:0,
    y:200,
    rotation:360});
});

ctaH1.addEventListener('click', function(){ //click eventListener to "DOM is Awesome"
  let topContentH4 = document.querySelectorAll(".main-content .top-content .text-content h4");
  TweenMax.from(topContentH4, 3, {
    x:-400,
    ease:Back.easeOut});
});


let topContentP = document.querySelectorAll(".main-content .top-content .text-content p"); //having the top content move from the right
TweenMax.from(topContentP, 3, {
  x:400,
  ease:Back.easeOut
});


middleImg.addEventListener('mouseover', function(){ //mouseover eventListener to middle img
  TweenMax.from(middleImg, 3, {
    autoAlpha:0}, {
      autoAlpha:1});
  TweenMax.from(servicesH4, 0.5, {color:"#ff0000", x:-300, opacity: 0});
  TweenMax.from(servicesP, 0.5, {x: 300, delay: 0.5, opacity: 0});
  TweenMax.from(productH4 , 0.5, {color:"#ff0000", y:300, delay: 1, opacity: 0});
  TweenMax.from(productP, 0.5, {y: -300, delay: 1.5, opacity: 0});
  TweenMax.from(visionH4, 0.5, {color:"#ff0000", x:500, delay: 2, opacity: 0});
  TweenMax.from(visionP, 0.5, {x: -500, delay: 2.5, opacity: 0});
});







