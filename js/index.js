// Your code goes here
const nav = document.querySelectorAll('.nav-link');
nav.forEach(function(e)
{
    e.addEventListener('mouseover', function(event){
        navy = event.target.style;
        navy.border = '2px solid dodgerblue';
    });
}
);


window.onclick = hideContextMenu;
window.onkeydown = listenKeys; 
const funBus = document.querySelector('body');
funBus.addEventListener("contextmenu", showContextMenu);
const contentDiv = document.querySelector(".main-navigation");
var li = document.createElement("li");


function showContextMenu (e) {
    funBus.style.display = 'block';
    funBus.style.left = event.clientX + 'px';
    funBus.style.top = event.clientY + "px";
    e.preventDefault();
    li.innerHTML = "Cool Menu";
    li.style.border = '1px Solid Black';
    li.style.padding = '10px 5px';
    li.style.borderLeft = "4px solid orangered";
    li.style.backgroundColor= "whitesmoke"
    li.style.fontSize = '16px';
    li.style.width =" 100px";
    li.style.heigh ="25px";
    li.style.listStyleType = 'none';
    contentDiv.appendChild(li);
  
}

function hideContextMenu(){
    list = li.style;
     list.display = 'none';

}

function listenKeys (event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == 27){
        hideContextMenu();
    } else {
    showContextMenu();
    }

}
