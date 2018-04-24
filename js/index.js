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
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"])

// Pass in content [], elements to update []
// if elements to update length is at least as long as content, proceed, othersie return false
const updateHTML = function (content, elements) {
  if (elements.length >= content.length) {
    content.forEach((x, i) => {
      elements[i].innerHTML = x;
    });
  }
  return false;
};

const createArray = function (obj, selector) {
  let result = [];
  for (let i in obj) {
    if (i.includes(selector)) {
      result.push(obj[i]);
    }
  }
  return result;
};

const createNewElement = function (nodeType, innerText, className) {
  const newNode = document.createElement(nodeType);
  newNode.innerHTML = innerText;
  if (className) newNode.className = className;
  return newNode;
};

// Create selectors
const navLinks = document.querySelectorAll('nav a'),
  ctaHeader = document.querySelectorAll('.cta-text h1'),
  ctaButton = document.querySelectorAll('.cta-text button'),
  mainContentHeaders = document.querySelectorAll('.main-content h4'),
  mainContent = document.querySelectorAll('.main-content p'),
  contactEle = document.querySelectorAll('.contact > *'),
  footerEle = document.querySelectorAll('footer > *'),

  nav = document.querySelector('nav'),

  headerLogo = document.getElementById('logo-img'), // image
  ctaImg = document.getElementById('cta-img'), // image
  mainContentImg = document.getElementById('middle-img'); // image

// Update HTML with JSON data
updateHTML(createArray(siteContent['nav'], 'nav-item'), navLinks);
updateHTML(createArray(siteContent['cta'], 'h1'), ctaHeader);
updateHTML(createArray(siteContent['cta'], 'button'), ctaButton);
updateHTML(createArray(siteContent['main-content'], 'h4'), mainContentHeaders);
updateHTML(createArray(siteContent['main-content'], 'content'), mainContent);
updateHTML(createArray(siteContent['contact'], ''), contactEle);
updateHTML(createArray(siteContent['footer'], ''), footerEle);

headerLogo.src = siteContent['nav']['img-src'];
ctaImg.src = siteContent['cta']['img-src'];
mainContentImg.src = siteContent['main-content']['middle-img-src'];