// Your code goes here

//Elements from the DOM
const signUpBtn = document.querySelector(".btn");
const firstImg = document.querySelector('#first-img');
const paragraph = document.querySelectorAll('p')
const destinationImg = document.querySelector('.content-destination img')

console.log(destinationImg);
//One
signUpBtn.addEventListener("click",function(event){
    signUpBtn.style.background = 'red';
})


//two
firstImg.addEventListener("mouseover",function(event){
    firstImg.style.filter = "grayscale(100%)";
} )

// three
document.addEventListener("keydown",function(event){
    if(event.key === "w"){
        console.log(paragraph);
        paragraph.forEach(item => item.style.color = "white");
    }
})

// four
document.addEventListener("keydown",function(event){
    if(event.key === "b"){
        console.log(paragraph);
        paragraph.forEach(item => item.style.color = "black");
    }
})

//five
destinationImg.addEventListener("mouseover",function(event){
    destinationImg.style.filter = "grayscale(50%)";
} )