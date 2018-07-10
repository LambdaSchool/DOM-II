// import TweenMax from 'gsap/TweenMax'
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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAVIGATION
// appendChild to nav links
// create new a element
let newLink1 = document.createElement("a");
newLink1.innerText = "Ideas";
// create new a element
let newLink2 = document.createElement("a");
newLink2.innerText = "Shop";
// find the position where the new element should be added
let position = document.querySelector("header nav");
// insert the new elements into their positions
position.appendChild(newLink1);
position.appendChild(newLink2);
// Select nav links
let navLink = document.querySelectorAll("header nav a");
// for each nav link 
// Update content for each nav link
// navLink[0].textContent = siteContent["nav"]["nav-item-1"];
// navLink[1].textContent = siteContent["nav"]["nav-item-2"];
// navLink[2].textContent = siteContent["nav"]["nav-item-3"];
// navLink[3].textContent = siteContent["nav"]["nav-item-4"];
// navLink[4].textContent = siteContent["nav"]["nav-item-5"];
// navLink[5].textContent = siteContent["nav"]["nav-item-6"];
// Change the color of the navigation text to be green.
for (let item of navLink) {
	item.style.color = 'green';
}
navLink.forEach((link, index) => {
	if (index <= 5) {
		link.textContent = siteContent["nav"][`nav-item-${index + 1}`];
	}
});

// CTA SECTION
// select cta text h1 element node
let ctaText = document.querySelector(".cta-text h1");
// inject html into cta text h1 element
ctaText.innerHTML = "DOM<br> Is<br> Awesome";
// select cta text button element
let ctaButton = document.querySelector(".cta-text button");
// inject text into the button element
ctaButton.textContent = siteContent["cta"]["button"];
// select the header img
let ctaImg = document.getElementById("cta-img");
// Update the img src for the header img
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);
// MAIN CONTENT
// select all the .text-content h4 nodes
let mainH4 = document.querySelectorAll(".text-content h4");
// update the contents for h4's
// top content
mainH4[0].textContent = siteContent["main-content"]["features-h4"];
mainH4[1].textContent = siteContent["main-content"]["about-h4"];
// bottom content
mainH4[2].textContent = siteContent["main-content"]["services-h4"];
mainH4[3].textContent = siteContent["main-content"]["product-h4"];
mainH4[4].textContent = siteContent["main-content"]["vision-h4"];
// middle img
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
// select all the .text-content p's
let mainP = document.querySelectorAll(".text-content p");
let mainPArray = ["features-content", "about-content", "services-content", "product-content", "vision-content"];
// update content for .text-content p's
for (let i = 0; i < mainPArray.length; i++) {
	mainP[i].textContent = siteContent["main-content"][mainPArray[i]];
}

// CONTACT
// select .contact h4 
let contactH4 = document.querySelector(".contact h4");
// update .contact h4 text content
contactH4.textContent = siteContent["contact"]["contact-h4"];
// select .contact p's
let contactP = document.querySelectorAll(".contact p");
let contactArray = ["address", "phone", "email"];
for (let i = 0; i < contactArray.length; i++) {
	contactP[i].textContent = siteContent["contact"][contactArray[i]];
}

// FOOTER
//select footer p
let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];

// EVENTS
// toggle font class function
function fontFamilyToggle() {
	this.classList.toggle('chivo-font');
	event.stopPropagation();
}
// event listener to toggle font family of the cta text
ctaText.addEventListener('click', fontFamilyToggle);
// toggle button text color
function buttonColorToggle() {
	this.classList.toggle('aqua');
}
ctaButton.addEventListener('click', buttonColorToggle);
// change color of p text on click
ctaImg.addEventListener('dblclick', () => {
	TweenMax.to('#cta-img', 1, {
		rotation: 360
	});
});
// change body background color on logo mouseeneter, then revert on mouseleave
logo.addEventListener('mouseenter', (event) => {
	event.target.style.border = '2px solid aqua';
	event.target.style.padding = '10px';
	event.target.style.borderRadius = '10px';
	event.stopPropagation()
});

// make footer disappear on mouseleave
footerP.addEventListener('mouseleave', (event) => {
    event.target.style.opacity = 0;
    event.stopPropagation();
}); 

let elBody = document.querySelector('body');
// function to toggle a background color class on something
function bodyBackgroundToggle() {
	this.classList.toggle('aqua-background');
}
// toggle the background color on keydown
elBody.addEventListener('keydown', bodyBackgroundToggle);

// rotate the middle image when clicked
middleImg.addEventListener('click', () => {
	TweenMax.to('#middle-img', 2, {
		rotation: 720
	});
});

// select the form element
let form = document.getElementById("form");

// override the forms default background on focus
form.addEventListener('focus', (event) => {
    event.target.style.background = 'white';
}, true);

// override the forms default background on blur
form.addEventListener('blur', (event) => {
    event.target.style.background = '#eee';
}, true);

// override the forms default background on input change
form.addEventListener('input', (event) => {
    event.target.style.background = 'aqua';
    event.stopPropagation();
}, true);



