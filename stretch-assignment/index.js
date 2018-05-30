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
  
  // const logo = document.getElementById("logo-img");
  // logo.setAttribute("src", siteContent["nav"]["img-src"]);
  
  // const ctaImg = document.getElementById("cta-img");
  // ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
  
  // const midImg = document.getElementById("middle-img");
  // midImg.setAttribute("alt", "");
  // midImg.setAttribute("src", siteContent["main-content"]["middle-image-src"]);
  
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])
  
  let mainContentImgJS = document.getElementById("middle-img");
  mainContentImgJS.setAttribute('src', siteContent["main-content"]["middle-image-src"]);
  
  let ctaImgJS = document.getElementById("cta-img");
  ctaImgJS.setAttribute('src', siteContent["cta"]["img-src"]);
  
  let navJS = document.querySelectorAll("nav a");
  navJS[0].innerHTML = siteContent["nav"]["nav-item-1"];
  navJS[1].innerHTML = siteContent["nav"]["nav-item-2"];
  navJS[2].innerHTML = siteContent["nav"]["nav-item-3"];
  navJS[3].innerHTML = siteContent["nav"]["nav-item-4"];
  navJS[4].innerHTML = siteContent["nav"]["nav-item-5"];
  navJS[5].innerHTML = siteContent["nav"]["nav-item-6"];
  // navJS.style.color = "#b0b0b0";
  // navJS.style.alignContent = 
  
  
  let ctaTextJS = document.querySelector(".cta-text h1");
  ctaTextJS.innerHTML = siteContent["cta"]["h1"];
  
  let ctaButtonJS = document.querySelector(".cta .cta-text button");
  ctaButtonJS.innerHTML = siteContent["cta"]["button"];
  
  
  
  let mainTitle = document.getElementsByTagName("h4");
  mainTitle[0].innerHTML = siteContent["main-content"]["features-h4"];
  mainTitle[1].innerHTML = siteContent["main-content"]["about-h4"];
  mainTitle[2].innerHTML = siteContent["main-content"]["services-h4"];
  mainTitle[3].innerHTML = siteContent["main-content"]["product-h4"];
  mainTitle[4].innerHTML = siteContent["main-content"]["vision-h4"];
  
  
  let mainContentJS = document.getElementsByTagName("p");
  mainContentJS[0].innerHTML = siteContent["main-content"]["features-content"];
  mainContentJS[1].innerHTML = siteContent["main-content"]["about-content"];
  mainContentJS[2].innerHTML = siteContent["main-content"]["services-content"];
  mainContentJS[3].innerHTML = siteContent["main-content"]["product-content"];
  mainContentJS[4].innerHTML = siteContent["main-content"]["vision-content"];
  
  
  
  let contactJS = document.getElementsByClassName("contact")[0];
  contactJS.getElementsByTagName("h4")[0].innerHTML = siteContent["contact"]["contact-h4"];
  contactJS.getElementsByTagName("p")[0].innerHTML = siteContent["contact"]["address"];
  contactJS.getElementsByTagName("p")[1].innerHTML = siteContent["contact"]["phone"]
  contactJS.getElementsByTagName("p")[2].innerHTML = siteContent["contact"]["email"]
  
  let footerJS = document.querySelector("footer");
  footerJS.getElementsByTagName("p")[0].innerHTML = siteContent["footer"]["copyright"];


document.getElementById("cta-img").addEventListener("mouseover", ()=>{ document.getElementById("cta-img").style.border="10px solid black";});

document.getElementById("cta-img").addEventListener("mouseout", ()=>{ document.getElementById("cta-img").style.border="5px solid pink";});

document.getElementById("cta-img").addEventListener("click", ()=>{ document.getElementById("cta-img").style.border="10px solid blue";});

document.querySelector("h1").addEventListener("mouseleave", ()=>{ document.querySelector("h1").style.background="blue";});

document.querySelector("h1").addEventListener("mouseenter", ()=>{ document.querySelector("h1").style.background="green";});

document.querySelector("h4").addEventListener("dblclick", ()=>{ document.querySelector("h4").style.background="white";});
