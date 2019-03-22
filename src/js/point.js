'use strict';

class Point {

  constructor(x, y, n) {
    this.id = generateId();
    this.x = x;
    this.y = y;
    this.n = n;
    this.size = 5;
    this.className = 'point';

    const gameField = document.getElementById(GAME_FIELD_ID);
    const color = getColorByNumber(this.n);
    const element = document.createElement('div');
    element.setAttribute('id', this.id);
    element.setAttribute('class', this.className);
    element.style.setProperty('background-color', color);
    element.style.setProperty('border-color', color);
    element.style.left = this.x + 'px';
    element.style.top = this.y + 'px';
    gameField.appendChild(element);

    this.element = element;
  }

  render() {
  }

  createSound(context) {
    this.sound = SoundFactory.createSound(context, getFrequencyByNumber(this.n), 5);
  }

  playSound() {
    this.sound.play();
  }

  deleteDOMElement() {
      const element = document.getElementById(this.id);
      if (element) {
        element.parentNode.removeChild(element);
      }
  }

}