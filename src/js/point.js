'use strict';

class Point {

  constructor(x, y, n) {
    this.id = generateId();
    this.x = x;
    this.y = y;
    this.n = n;
    this.size = 5;
    this.className = 'point';
    console.log('creating Point', this);
  }

  render() {
    return new Promise((resolve, reject) => {
      let element = document.getElementById(this.id);
      if (!element) {
        const gameField = document.getElementById(GAME_FIELD_ID);
        const color = getColorByNumber(this.n);
        element = document.createElement('div');
        element.setAttribute('id', this.id);
        element.setAttribute('class', this.className);
        element.style.setProperty('background-color', color);
        element.style.setProperty('border-color', color);
        gameField.appendChild(element);
        console.log(element, color, element.style);
      }
      element.style.left = this.x + 'px';
      element.style.top = this.y + 'px';
      resolve();
    });
  }

  deleteDOMElement() {
      const element = document.getElementById(this.id);
      if (element) {
        element.parentNode.removeChild(element);
      }
  }

}