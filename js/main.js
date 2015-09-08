$(function bgAnimation() {
  var el = $('.jumbotron');
  var last, elapsed, xPos, yPos;
  var width = 499;
  var height = 520;
  var animationLength = 25 * 1000;

  function tick(timestamp) {
    if (!last) {
      last = timestamp;
      return requestAnimationFrame(tick);
    }

    elapsed = timestamp - last;
    xPos = width / animationLength * elapsed;
    yPos = height / animationLength * elapsed;

    el.css({
      'background-position-x': '-=' + xPos,
      'background-position-y': '+=' + yPos
    });

    requestAnimationFrame(tick);
    last = timestamp;
  }

  requestAnimationFrame(tick);
});
