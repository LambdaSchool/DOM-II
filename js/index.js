// Your code goes here

const funBusRainbow = document.querySelector('h1');


funBusRainbow.addEventListener('mouseover', function(){

    this.animate({
        color: ['red', 'orange', 'yellow', 'green', 'blue', 'purple',],
    }, {
        duration:2000,
        iterations: Infinity,}
    )
    }
);

// funBusRainbow.addEventListener('click', function(){
//     this.style.color = '';
// })

//how can I for loop this
const nav1 = document.querySelectorAll('.nav a')[0];
const nav2 = document.querySelectorAll('.nav a')[1];
const nav3 = document.querySelectorAll('.nav a')[2];
const nav4 = document.querySelectorAll('.nav a')[3];


const nav1List = nav1.classList;
const nav2List = nav2.classList;
const nav3List = nav3.classList;
const nav4List = nav4.classList;

nav1.onclick = function(event){
    var result = nav1List.toggle('go');
    if(result) {
        nav1.style.color = 'red';
    } else {
        nav1.style.color = '';
    }
}

nav2.onclick = function(event){
    var result = nav2List.toggle('go');
    if(result) {
        nav2.style.color = 'orange';
    } else {
        nav2.style.color = '';
    }
}

nav3.onclick = function(event){
    var result = nav3List.toggle('go');
    if(result) {
        nav3.style.color = 'green';
    } else {
        nav3.style.color = '';
    }
}

nav4.onclick = function(event){
    var result = nav4List.toggle('go');
    if(result) {
        nav4.style.color = 'blue';
    } else {
        nav4.style.color = '';
    }
}
//can I make it click through the rainbow with other else if?
//can we toggle on/off animations? Could get it to toggle on but not off

