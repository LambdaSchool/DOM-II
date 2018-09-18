// Your code goes here
const logo = document.querySelector('.logo-heading');
const rickRoll = document.querySelector(".rickRoll");
const buttonList = document.querySelectorAll('.btn');
const adventurePic = document.querySelector(".img-content img");
const navLinks = document.querySelectorAll(".nav a");
const bodCont = document.querySelector("body");
const funImg = document.querySelector(".funImg");
const destImg = document.querySelector("#destImg");
const divs = document.querySelectorAll(".destination h4");
const titles = document.querySelectorAll(".content-section");
 //new images for effects
const rick = document.createElement('img');
rick.src = "img/rick.jpg"
const roll = document.createElement('img');
roll.src = "img/roll.jpg"
const dab = document.createElement('img');
dab.src = "img/dabbingCactus.jpg"
 //img event
//rick roll on fun-bus img
rickRoll.addEventListener("mouseover", mouseOverImage);
 function mouseOverImage() {
    if (rickRoll.src.includes("img/fun-bus.jpg")) {
        rickRoll.src = "https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif"
    } else if (rickRoll.src.includes("img/rick.jpg")) {
        rickRoll.src = "https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif"
    } else if (rickRoll.src.includes("img/roll.jpg")) {
        rickRoll.src = "img/fun-bus.jpg"
    }
};
 //fortnite dab 
funImg.addEventListener("dblclick", dblClickImg);
 function dblClickImg() {
    if (funImg.src.includes("img/fun.jpg")) {
        funImg.src = "https://media.giphy.com/media/fFSJFtyedUg5W/giphy.gif"
    } else if (funImg.src.includes("img/dabbingCactus.jpg")) {
        funImg.src = "img/fun.jpg"
    }
};
 //image alert event
function drag(ev) {
    destImg.style.display = "none";
    alert ("Could you not?");
};
//end img events
//button event
buttonList.forEach(function(button) {
    //prevents page from linking to google.com.
    button.addEventListener("click", function(event){
        event.preventDefault()
    });
    button.addEventListener("click", goAway);
});
 function goAway(event){
    event.target.style.display = "none";
    //if the div area is clicked the whole button dissapears. 
    //if the link is clicked, it dissapears but leaves the blank div area. The div area will vanish on the second click. 
};
 //logo effects
logo.addEventListener("mouseover", function() {
    logo.style.border = '2px dashed black';
    logo.style.backgroundColor = 'gold';
    logo.style.padding = '10px';
});
 //nav bar and links effects
navLinks.forEach(function(element){
    element.addEventListener('mouseover', function(event){
        event.target.style.color = "orange";
        event.target.style.fontSize = "3.3rem";
    });
    element.addEventListener('mouseout', function(event){
        event.target.style.color = "";
        event.target.style.fontSize = "";
    })
});
 //adventure pick effect
function fade() {
    adventurePic.style.opacity = '.7';
};
function noFade() {
    adventurePic.style.opacity = '';
};
adventurePic.addEventListener("mouseover", fade);
adventurePic.addEventListener("mouseout", noFade);
 //body color change effect
//text change effect
function blackWhite() {
    bodCont.style.backgroundColor = "black";
    bodCont.style.color = "white";
};
function bodyDefault() {
    bodCont.style.backgroundColor = "";
    bodCont.style.color = "";
};
 bodCont.addEventListener("keydown", blackWhite);
bodCont.addEventListener("keyup", bodyDefault);
 //h4 effect
divs.forEach(function(element){
    element.addEventListener("wheel", function(event){ 
        event.target.style.border = "2px solid black";
        event.target.style.backgroundColor = "aqua";
    });
});
 //h2 effect
titles.forEach(function(element){
    element.addEventListener("contextmenu", function(event){
        event.target.style.border = "2px solid black";
        event.target.style.backgroundColor = "aqua";
        event.target.style.padding = "25px";
    })
})