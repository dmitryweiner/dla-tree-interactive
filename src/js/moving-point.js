'use strict';

class MovingPoint extends Point {

  constructor(x, y, n) {
    super(x, y, n);
    this.className = 'moving-point';

    const color = getColorByNumber(this.n);
    this.element.setAttribute('class', this.className);
    this.element.style.setProperty('background-color', color);
    this.element.style.setProperty('border-color', color);
  }

  moveRandomly() {
    const gameField = document.getElementById(GAME_FIELD_ID); // TODO: remove dependency

    this.x = this.x + Math.round(Math.random() * this.size * 2 - this.size);
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > gameField.clientWidth) {
      this.x = gameField.clientWidth;
    }

    this.y = this.y + Math.round(Math.random() * this.size * 2 - this.size);
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > gameField.clientHeight) {
      this.y = gameField.clientHeight;
    }

  }

  checkCollision(treePoints) {
    return treePoints.some(point => Math.abs(this.x - point.x) < (this.size + point.size) &&
        Math.abs(this.y - point.y) < (this.size + point.size));
  }

  render() {
    super.render();
    this.element.style.left = this.x + 'px';
    this.element.style.top = this.y + 'px';
  }

}