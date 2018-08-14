// Your code goes here
// * [ ] `mouseover`
// * [ ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [x] `load`
// * [ ] `focus`
// * [x] `resize`
// * [x] `scroll`
// * [ ] `select`
// * [ ] `dblclick`
// .stopPropagation();
let opacity = 1;
const mainNav = document.querySelector('.nav-container .nav');
const funBusImage = document.querySelector('.intro img');
funBusImage.style.display = 'auto';
// janky fade out effect on funBusImage scroll
window.addEventListener('scroll', (event) => {
    opacity = opacity - .3;    
    funBusImage.style.opacity = `${opacity}`;
    if (opacity <= 0) {funBusImage.style.display = 'none'}
})

window.addEventListener('resize', (event) => {
    funBusImage.style.opacity = 1;
})

// window.addEventListener('load', (event) => {
//     alert('Welcome to my Fun Bus Page!');
//     alert('I hope you enjoy your stay here on the Fun Bus!')
//     alert('The Fun Bus strives to be a wild ride!')
//     alert('I wish all my content was delivered to me through alert messages in my browser.')
//     alert('Content control would be a thing of the past!')
//     alert('Just think about it, you could just click a simple button to get more information to consume.')
//     alert(`Honestly, you wouldn't need to think about much else.`)
//     alert('Just mindlessly clicking... clicking... clicking...')
//     alert('How about we change up the boxes a little bit. You know what to do.')
//     confirm(`Sometimes options can be fun! Who knew "cancel" could be so enticing! Go ahead and click whatever you'd like. You've earned it.`);
//     alert(`Not that it makes much of a choice. It's all about the illusion of choice, am I right? The idea of power is intoxicating.`)
//     alert(`I want to get off Fun Bus's wild ride`)
// })