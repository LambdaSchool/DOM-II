const blocks = document.querySelector('.blocks');

blocks.addEventListener('click', function(event) {
  if(event.target === blocks) return;
  blocks.prepend(event.target);
});

blocks.addEventListener('mousedown', function(event) {
  if(event.target === blocks) return;
  let position = 0;
  const move = setInterval(function() {
    position += 10;
    if(position < 1000) {
      TweenMax.to(event.target, 1, {x:position});
    }
      blocks.addEventListener('mouseup', function() {
      TweenMax.to(event.target, 1, {x:-10});
      clearInterval(move);
    });
  }, 10);
})