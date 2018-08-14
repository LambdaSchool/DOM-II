// Your code goes here
console.log("Test!");

// variables to point to parts of DOM being changed
const mainPage = document.querySelector(".home");
const navigation = document.querySelector(".nav");
const logoHeading = document.querySelector(".logo-heading")
const headerIntro = document.querySelector(".intro");
const topImg = document.querySelector(".img-content")
const buttons = document.querySelectorAll(".btn");

//Multiple items to cache
const textContent = document.querySelectorAll(".text-content");
const allH4Text = document.querySelectorAll("h4");
// Event Listeners
navigation.addEventListener('mouseover', (event) => {
  console.log("We sensed a mouse dancing above a link.");
  event.stopPropagation();
  });
  navigation.addEventListener('click', (event) => {
    event.preventDefault();
  });
logoHeading.addEventListener('click', (event) => {
  event.currentTarget.parentNode.style.color = "red";
  console.log("Ouch! That hurt!");
  console.log("Wait a minute, am I bleeding??");
  logoHeading.addEventListener('mouseleave', (event) => {
    event.currentTarget.parentNode.style.color = "pink";
    console.log("Be more careful next time!!!");
    event.stopPropagation();
  })
});
headerIntro.addEventListener('mouseover', (event) => {
  event.currentTarget.style.width = "110%";
  headerIntro.addEventListener('mouseleave', (event) => {
    event.currentTarget.style.width = "100%";
    event.stopPropagation();
  });
});
mainPage.addEventListener('keydown', (event) => {
  console.log("OI! You're pressing the keys too hard! STAHP");
});
headerIntro.addEventListener('dblclick', (event) => {
  console.log("I see you like to doubleclick. Me too.");
});
buttons.addEventListener('mouseover', (event) => {
  event.currentTarget.style.width = "110%";
  buttons.addEventListener('mouseleave', (event) => {
    console.log("C'mon, why did you leave?");
    event.currentTarget.style.width = "100%";
  })
});
