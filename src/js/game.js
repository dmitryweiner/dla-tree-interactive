'use strict';

class Game {

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.treePoints = [];
    this.movingPoints = [];
    this.state = STATE_STOPPED;
  }

  start() {
    console.log('this.state = STATE_PLAYING');
    this.state = STATE_PLAYING;

    // create initial point
    this.treePoints.push(new Point(this.width / 2, this.height / 2, 0));

  }

  stop() {
    console.log('this.state = STATE_STOPPED');
    this.state = STATE_STOPPED;
  }

  getCurrentState() {
    return this.state;
  }

  tick() {

    const pointsToDelete = [];

    this.movingPoints = this.movingPoints.filter((point) => {
      point.moveRandomly();
      if (point.checkCollision(this.treePoints)) {
        // create new tree point
        this.treePoints.push(new Point(point.x, point.y, this.treePoints.length));

        // delete this moving point
        pointsToDelete.push(point);
        return false;
      }
      return true;
    });

    setTimeout(() => {
      pointsToDelete.forEach(point => point.deleteDOMElement());
      this.movingPoints.forEach(point => point.render());
      this.treePoints.forEach(point => point.render());
    }, 0);
  }

  addMovingPoint(x, y) {
    console.log('addMovingPoint(x, y)', x, y);
    this.movingPoints.push(new MovingPoint(x, y, this.treePoints.length));
  }
}

