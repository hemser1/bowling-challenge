function Game(){
  this._frames = [];
  this._ball_1 = [];
  this._ball_2 = [];
  this._frameTotal = [];
  this._gameTotal = [];
  this._finalScore = 0;

  Game.prototype.frames = function(){ return this._frames; };

  Game.prototype.finalScore = function(){ return this._finalScore; };

  Game.prototype.rollOne = function(score) {
    if (score === 10) {
      this._ball_1.push(score);
      game.frameTotal();
    } else {
      this._ball_1.push(score);
    }
  };

  Game.prototype.rollTwo = function(score) {
    this._ball_2.push(score);
    game.frameTotal();
  };

  Game.prototype.frameTotal = function(){
    if (this._ball_1[0] === 10) {
      this._frameTotal.push(this._ball_1[0])
    } else {
    this._frameTotal.push(this._ball_1[0] + this._ball_2[0])
    }
    game.addFrame();
    game.gameTotal();
    if (game.frames().length === 10) {
      console.log("Final Score is " + game.finalScore())
    }
  };

  Game.prototype.addFrame = function(){
    console.log("Frame " + (game.frames().length + 1))
    this._frames.push([this._frameTotal[0]])
    this._ball_1.pop();
    this._ball_2.pop();
    this._frameTotal.pop();
  };
  Game.prototype.gameTotal = function(){
    if (this._frames.length > 1) {
    arr = flatten(this._frames)
    this._finalScore = arr.reduce(add)
  }
  };

};

game = new Game();

const flatten = function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

const add = (a, b) =>
  a + b
