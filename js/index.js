const startButton = document.getElementById("start-button");
const ctaText = document.getElementById("big-text");
const navLinks = Array.from(document.querySelectorAll(".nav"));
const logoImg = document.getElementById("logo-img");
const colors = ["red", "blue", "orange", "green", "purple", "yellow", "aqua", "pink"]


window.addEventListener("click", (event) => {
  TweenLite.to(ctaText, 2, {color:colors[Math.floor(Math.random() * colors.length)]});
});


startButton.addEventListener("click", (event) => {
  TweenLite.to(startButton, 1, {margin: `${Math.floor(Math.random()*100)}px ${Math.floor(Math.random()*100)}px ${Math.floor(Math.random()*100)}px ${Math.floor(Math.random()*100)}px`, ease:Bounce.easeInOut});
  event.stopPropagation();
});


navLinks[0].addEventListener("click", (event) => {
  TweenMax.to(navLinks, 2, {rotation:180});
  event.stopPropagation();
});

navLinks[1].addEventListener("click", (event) => {
  TweenMax.to(navLinks, 2, {rotation:0});
  event.stopPropagation();
});

navLinks[2].addEventListener("click", (event) => {
  console.log("I got clicked 3");
  event.stopPropagation();
});

navLinks[3].addEventListener("click", (event) => {
  console.log("I got clicked 4");
  event.stopPropagation();
});

navLinks[4].addEventListener("click", (event) => {
  console.log("I got clicked 5");
  event.stopPropagation();
});

navLinks[5].addEventListener("click", (event) => {
  console.log("I got clicked 6");
  event.stopPropagation();
});

logoImg.addEventListener("mouseenter", (event) => {
  TweenLite.to(logoImg, 10, {width: `${Math.floor(Math.random()*1000)}px`, height: `${Math.floor(Math.random()*1000)}px`, background:`rgb(${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))}, ${(Math.floor(Math.random() * 256))})`});
});

logoImg.addEventListener("mouseleave", (event) => {
  console.log("Mouse is not over picture");
  TweenLite.to(logoImg, 10, {width: `183px`, height: `36px`, background: `rgb(255, 255, 255)`});
});

window.addEventListener("keyup", (event) => {
  ctaText.innerHTML = `D${event.key}M\<br> Is\<br> Awesome`
});
