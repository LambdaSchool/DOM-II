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
  
  //  =========  Top Nav ==========
  let logo = document.getElementById("logo-img");
  logo.src = siteContent["nav"]["img-src"];
  
  
  let navItem = document.querySelectorAll("nav a");
  
  let nav = document.querySelector("nav");
  let anchor1 = document.createElement("a");
  let anchor2 = document.createElement("a");
  let home = document.createTextNode("Home");
  let learnMore = document.createTextNode("Learn More");
  
  navItem[0].innerHTML = siteContent["nav"]["nav-item-1"];
  navItem[1].innerHTML = siteContent["nav"]["nav-item-2"];
  navItem[2].innerHTML = siteContent["nav"]["nav-item-3"];
  navItem[3].innerHTML = siteContent["nav"]["nav-item-4"];
  navItem[4].innerHTML = siteContent["nav"]["nav-item-5"];
  navItem[5].innerHTML = siteContent["nav"]["nav-item-6"];
  
  
  nav.append(anchor2.appendChild(learnMore));
  nav.prepend(anchor1.appendChild(home));
  
  nav.style.color = "green";
  
  for (let i =0; i<navItem.length; i++){
    navItem[i].style.color = "green";
  };
  
  // =========== CTA ==========
  let ctaH1 = document.querySelector(".cta .cta-text h1");
  let ctaButton = document.querySelector(".cta .cta-text button");
  let ctaImg = document.getElementById("cta-img");
  
  ctaH1.innerHTML = siteContent["cta"]["h1"];
  ctaButton.innerHTML = siteContent["cta"]["button"];
  ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
  
  ctaButton.addEventListener("click", function(){
    alert("You've clicked me!");
  });
  
  // ======== Content ===========
  let topContent = document.querySelectorAll(".text-content h4");
  let pContent = document.querySelectorAll(".text-content p");
  
  
  let middleImg = document.getElementById("middle-img");
  middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);
  
  topContent[0].innerHTML = siteContent["main-content"]["features-h4"];
  pContent[0].innerHTML = siteContent["main-content"]["features-content"];
  
  topContent[1].innerHTML = siteContent["main-content"]["about-h4"];
  pContent[1].innerHTML = siteContent["main-content"]["about-content"];
  
  topContent[2].innerHTML = siteContent["main-content"]["services-h4"];
  pContent[2].innerHTML = siteContent["main-content"]["services-content"];
  
  topContent[3].innerHTML = siteContent["main-content"]["product-h4"];
  pContent[3].innerHTML = siteContent["main-content"]["product-content"];
  
  topContent[4].innerHTML = siteContent["main-content"]["vision-h4"];
  pContent[4].innerHTML = siteContent["main-content"]["vision-content"];
  
  // =========== Contact ===========
  let contactH4 = document.querySelector(".contact h4");
  let contactContent = document.querySelectorAll(".contact p");
  
  
  contactH4.innerHTML = siteContent["contact"]["contact-h4"];
  contactContent[0].innerHTML = siteContent["contact"]["address"];
  contactContent[1].innerHTML = siteContent["contact"]["phone"];
  contactContent[2].innerHTML = siteContent["contact"]["email"];
  
  // ======= Footer ========
  let footer = document.querySelector("footer p");
  
  
  footer.innerHTML = siteContent["footer"]["copyright"];
  
  
  document.body.style.background = "lightgrey";
  middleImg.style.boxShadow = "20px 20px black";



  // =========== DOM II - Event Listeners ============

  ctaH1.addEventListener("mouseover", () => {
    document.body.style.background = "yellow";
  });

  navItem[0].addEventListener("click", () => {
      alert("You have clicked on the Services tab");
  });

  document.body.addEventListener("keydown", () => {
      document.body.style.background = "red";
  });

  document.body.addEventListener("keyup", () => {
    document.body.style.background = "green";
  });

  window.addEventListener("resize", () => {
      alert("The document is being resized");
  });

  window.addEventListener("scroll", () => {
    prompt("Where are you scrolling to?");
  });

  navItem[1].addEventListener("copy", () => {
    navItem[1].style.color = "purple";
  });

  ctaImg.addEventListener("contextmenu", () => {
    prompt("What are you looking at this image for?");
  });

  ctaH1.addEventListener("dblclick", () => {
    ctaH1.innerHTML = "DOM IS REALLY AWESOME";
  });

  ctaButton.addEventListener("mouseout", () => {
    alert(`Go get started`);
  });
