// Your code goes here

//****MOUSEOVER EVENT ********** */
// const funBusImg = document.querySelector('.intro img');

// // cb - Mouseover event handler
// //Temporarily hide bus image
// function hideFunBusImg(event){
//     event.target.style.display = 'none';

//     setTimeout(function(){
//         event.target.style.display = '';
//     }, 1000);

// }
// //Add Event listeners for funBusImg
// funBusImg.addEventListener('mouseover', hideFunBusImg);


//************* KEYDOWN Event**************/
//change footer text on keydown
// let footer = document.querySelector('.footer');
// let footerText = ''
// //keydown event handler
// function changeFooterText(event){
//     footerText += event.key;
//     footer.style.fontSize = '36px';
//     footer.textContent = footerText;
// }

// document.addEventListener('keydown', changeFooterText);


/********************************************
 * wheel event
 *****************************************/

 //wheel event handler
// let dynamicFontSize = '1.6';

// function changeFont(event){
//     console.log(event.deltaY);
//     console.log(document.querySelector('body').style.fontSize);
//     if (event.deltaY > 0) {  //wheel direction down
//         dynamicFontSize = parseFloat(dynamicFontSize) + 0.2;
//         dynamicFontSize = (dynamicFontSize.toString() + 'em');
//         document.querySelector('.logo-heading').style.fontSize = dynamicFontSize;
//     }
//     if (event.deltaY < 0){  //wheel direction up
//         dynamicFontSize = parseFloat(dynamicFontSize) - 0.2;
//         dynamicFontSize = (dynamicFontSize.toString() + 'em');
//         document.querySelector('.logo-heading').style.fontSize = dynamicFontSize;
//     }
// }
// document.addEventListener('wheel', changeFont);


/*********************************************************
 * DRAG / DROP EVENT
 ****************************************************** */

//make image draggable
//  const letsGoImg = document.querySelector('.img-content img');
// letsGoImg.draggable = true;
// letsGoImg.style.cursor = 'pointer';


// //create functionality for drop container
// const dropContainer = document.querySelector('.text-content');

// //event handler for drop container
// function dragDrop(){
//     dropContainer.appendChild(letsGoImg);
// }

// //Add event listener for drop container
// dropContainer.addEventListener('drop', dragDrop);

// // ***USE PREVENT DEFAULT to allow drop ******
// dropContainer.addEventListener("dragover", function (event) {
//     event.preventDefault();
// });


/********************************************************
 * LOAD EVENT
 *****************************************************/

 //Give message saying that resources have finished loading
//  window.addEventListener('load', function(event){
//     //grab header
//     const header = document.querySelector('.main-navigation');
//     const infopara = document.createElement('p');
//     infopara.textContent = 'All Resources have finished loading!';
//     infopara.style.color = '#ff1111';
//     header.prepend(infopara);

//     setTimeout(() => {
//         infopara.style.display = 'none';
//     }, 3000);

//  });


/******************************************************
 * FOCUS EVENT
 *******************************************************/

//change border of anchors that has focus
// const navAnchors = document.querySelectorAll('.nav-link');

// //add event handler
// function addImgBorder(event){
//     event.target.style.border = '2px solid orange';
// }

// //add event listeners
// for(anchor of navAnchors){
//     anchor.addEventListener('focus', addImgBorder);
// }


/*******************************************
 * RESIZE EVENT
 ********************************************/
// let resizeCount = 0;
// window.addEventListener('resize', function(){
//     const span = document.createElement('span');
//     document.querySelector('footer').prepend(span);
//     resizeCount += 1;
//     span.style.fontSize = '20px';
//     span.textContent = `Resized screen ${resizeCount} times`;

// });



/*******************************************
 * SCROLL EVENT
 ********************************************/


// function changeBackgroundColor(event){

//     let color1, color2, color3;
//     color1 = Math.floor(Math.random() * 256);
//     color2 = Math.floor(Math.random() * 256);
//     color3 = Math.floor(Math.random() * 256);
//     document.querySelector('body').style.backgroundColor = `rgb(${color1},${color2},${color3})`;

//  }

// window.addEventListener('scroll', changeBackgroundColor);


 /*******************************************
 * SELECT EVENT
 ********************************************/
//Create input box so we can use select event
// const newInputEl= document.createElement('input');
// document.querySelector('.main-navigation').prepend(newInputEl);

// //event handler
// function changeTextColor(event){
//     newInputEl.style.color = 'red';
// }

// //add event listener
// newInputEl.addEventListener('select', changeTextColor);



/*******************************************
 * DBLCLICK EVENT
 ********************************************/
//Change color of button when double-clicked

// const destButtons = document.querySelectorAll('.btn');
// function changeButtonColor(event){
//     event.target.style.backgroundColor = '#3498db';
// }

// destButtons.forEach((btn)=>{
//     btn.addEventListener('dblclick', changeButtonColor);
// });


/****************************************************
 * USE STOPPROPOGATION METHOD
 ***********************************************/
//select parent and child elements
// const destinationDivs = document.querySelectorAll('.destination');
// const destinationBtns = document.querySelectorAll('.destination .btn');
// console.log(destinationDivs[0]);
// console.log(destinationBtns[0]);

// //set click event for first destinationDiv (parent element)
// destinationDivs[0].addEventListener('click',function(event){
//     event.target.style.backgroundColor = '#34495e';
// });

// //set click event for first destinationBtn (child element)
// destinationBtns[0].addEventListener('click', function (event) {
//     event.target.style.backgroundColor = '#16a085';
//     event.stopPropagation();  //stops destinationDiv click from firing
// });



/************************************************
 * .preventDefault was used above in DRAG/DROP event
 **************************************************/




