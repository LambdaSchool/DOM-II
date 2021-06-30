// Your code goes here

// Selectors
const mainHeader = document.querySelector(".main-navigation h1");
const navBar = document.querySelectorAll("a");
const body = document.querySelector("body");
const destinations = document.querySelectorAll(".destination");
const img = document.querySelectorAll("img");
const secondHeading = document.querySelectorAll("h2");
const aAwaits = document.querySelectorAll(".text-content");
const panA = document.querySelector(".intro");
const mFat = document.querySelector(".content-destination");
const foot = document.querySelector(".footer");


// Event Listeners

// H1 Start
mainHeader.addEventListener("click", (event) => {
  alert("Welcome to the Fun Bus! You found an easter egg!");
});

// H1
mainHeader.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "purple";
  event.target.style.color = "white";
  event.target.style.borderRadius = "10px";
  event.target.style.padding = "5px";
});

// H1 End
mainHeader.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "white";
  event.target.style.color = "black";
  event.target.style.borderRadius = "10px";
  event.target.style.padding = "5px";
});

// Nav links Start
navBar.forEach((nav) => {

  // Nav links
  nav.addEventListener("mouseover", (event) => {
    event.target.style.borderBottom = "1px solid crimson";
    event.target.style.color = "blue";
  });

  // Nav links
  nav.addEventListener("mouseleave", (event) => {
    event.target.style.border = "none";
    event.target.style.color = "black";
  });

  // Nav links End
  nav.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

// intro start
panA.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "#07b00d";
  event.target.style.color = "white";
  event.target.style.borderRadius = "10px";
  event.target.style.padding = "5px";
});

// Intro end
panA.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "white";
  event.target.style.color = "black";
  event.target.style.borderRadius = "10px";
  event.target.style.padding = "5px";
});

// Body Container Start
body.addEventListener("keypress", (event) => {
  alert("You pressed a Key that triggered this alert!");
});

// Body Container End
body.addEventListener("wheel", (event) => {
  body.style.background = 'linear-gradient(to bottom, #fff 50%, #bf25f7)';
});


// Image Container start
img.forEach((aMan) => {

  //Image Container end
  aMan.addEventListener("dblclick", (event) => {
    event.target.style.borderRadius = "50%";
  });
});

// text container 1 start
aAwaits.forEach((afat) => {

  // text container 1
  afat.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "blue";
    event.target.style.color = "white";
    event.target.style.borderRadius = "10px";
    event.target.style.padding = "5px";
  });

  // text container 1 end
  afat.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
    event.target.style.borderRadius = "10px";
    event.target.style.padding = "5px";
  });
});

// Text container 2 start
mFat.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "#F75D25";
  event.target.style.color = "white";
  event.target.style.borderRadius = "10px";
  event.target.style.padding = "5px";
});

// Text container 2 end
mFat.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "white";
  event.target.style.color = "black";
  event.target.style.borderRadius = "10px";
  event.target.secondHeading.padding = "5px";
});

// Text container 3 start
destinations.forEach((destination) => {
  destination.addEventListener("mouseenter", (event) => {
    event.target.style.backgroundColor = "crimson";
    event.target.style.color = "white";
    event.target.style.borderRadius = "10px";
    event.target.style.padding = "5px";
  });

  // Text container 3 end
  destination.addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";
    event.target.style.borderRadius = "10px";
    event.target.style.padding = "5px";
  });
});

// Footer start
foot.addEventListener("mouseenter", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.style.color = "black";
  event.target.style.borderRadius = "10px";
  event.target.style.padding = "5px";
});

// Footer end
foot.addEventListener("mouseleave", (event) => {
  event.target.style.backgroundColor = "white";
  event.target.style.color = "black";
  event.target.style.borderRadius = "10px";
  event.target.style.padding = "5px";
});


