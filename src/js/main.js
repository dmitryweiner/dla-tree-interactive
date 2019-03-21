'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const gameField = document.getElementById(GAME_FIELD_ID);

  const game = new Game(
    gameField.clientWidth,
    gameField.clientHeight
  );

  game.start();

  function gameTick() {
    if (game.getCurrentState() === STATE_PLAYING) {
      game.tick();
      const actualDelay = game.getDelay();
      const plannedDelay = 1000 / FPS;

      if (actualDelay < plannedDelay) {
        setTimeout(() => requestAnimationFrame(gameTick), plannedDelay - actualDelay);
      } else {
        requestAnimationFrame(gameTick);
      }
    }
  }

  gameTick();

  gameField.addEventListener('click', function (event) {
    game.addMovingPoint(event.clientX, event.clientY);
  });

  gameField.addEventListener('touchstart', function (event) {
    event.preventDefault();
    console.log('touchstart', event);
    game.addMovingPoint(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
  });

});
