// Your code goes here

//Event 1
let navMouseOver = document.querySelectorAll('.nav-link');
navMouseOver.forEach(item => {
    item.addEventListener("mouseenter", event => {
    event.target.style.color = 'purple';
    })
})
navMouseOver.forEach(item => {
    item.addEventListener("mouseleave", event =>{
    event.target.style.color = 'orange';
    })
});

//Event 2
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = '-500px';

function menuToggle(){
    if (menuStatus == false){
        menu.style.marginLeft = '0px';
        menuStatus = true;
    }
    else if (menuStatus == true){
        menu.style.marginLeft = '-500px';
        menuStatus = false;
    }
}

menuBtn.onclick = menuToggle;

//Event 3 
const headerPic = document.querySelector("header img");
headerPic.addEventListener('mouseenter', item => {
    headerPic.style.transform = 'scale(2)';
    // headerPic.style.overflow = 'hidden';
    //check later....try css??
})

const headerPicDown = document.querySelector('header img');
headerPicDown.addEventListener('mouseleave', item =>{
    headerPicDown.style.transform = 'scale(1)';
})

//Event 4
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
 });


//Event 5 
const focusHeader = document.querySelectorAll('h4');
focusHeader.forEach(item =>{
    item.addEventListener('click', event =>{
        event.target.style.fontSize = '3rem';
    })
})

//Events 6
const dblClickUp = document.querySelector('.content-destination h2')
dblClickUp.addEventListener('dblclick', item =>{
    dblClickUp.style.transform = 'scale(3)';
})

const dblClickDown = document.querySelector('.content-destination h2')
dblClickDown.addEventListener('click', item =>{
    dblClickDown.style.transform = 'scale(1)';
})
//can double click reverse like mouse enter and mouse leave? maybe not
//click works to resize back to normal

// const selectText = document.querySelector('.intro p');
// selectText.addEventListener('select', event =>{
//     event.style.backgroundColor = 'purple';
// })

//Event 7 
const selectText = document.querySelectorAll('p');
selectText.forEach(item =>{
    item.addEventListener('click', event =>{
        event.target.style.color = 'purple';
    })
})

// const hide = document.querySelectorAll('h2');
// hide.forEach(item =>{
//     item.addEventListener('click', event=>{
//         event.target.style.visibility = 'hidden';
//     })
// })
//works for all of them, but overrides the h2 above where it changes text size. I want to specifically select.

//Event 8
const hide = document.querySelectorAll('.text-content h2');
hide.forEach(item =>{
    item.addEventListener('click', event=>{
        event.target.style.visibility = 'hidden';
    })
})
//works perfectly!

// const shadow = document.querySelectorAll('.menu');
// shadow.forEach(item =>{
//     item.addEventListener("mouseenter", event=>{
//         event.target.style.boxShadow + "5px 5px 1px pink, 10px 10px 1px pink";
//     })
// })


//Events 9
const shadow = document.querySelectorAll('.intro');
shadow.forEach(item =>{
    item.addEventListener("mouseenter", event=>{
        event.target.style.boxShadow = "5px 5px 1px pink";
    })
})

const noShadow = document.querySelectorAll('.intro');
noShadow.forEach(item =>{
    item.addEventListener("mouseleave", event=>{
        event.target.style.boxShadow = "5px 5px 1px #fff";
    })
})


//Events 10
const picShadow = document.querySelectorAll(".img-content img");
picShadow.forEach(item =>{
    item.addEventListener("mouseenter", event =>{
        event.target.style.boxShadow = "5px 5px 1px pink";
    })
})

const picNoShadow = document.querySelectorAll(".img-content img");
picNoShadow.forEach(item =>{
    item.addEventListener("mouseleave", event =>{
        event.target.style.boxShadow = "5px 5px 1px #fff";
    })
})