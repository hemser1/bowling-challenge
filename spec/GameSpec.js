'use strict';

describe("Game", function() {
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  describe("game.Frames has no frames by defaul", function(){
    it("has no frames by default", function(){
      expect(game._frames.length).toEqual(0)
    });
  });

  describe("adds scores to frame", function(){
    it("totals frametotal", function(){
      frame.RollOne(4);
      frame.RollTwo(5);
      frame.FrameTotal();
      expect(this._FrameTotal).toEqual(frame._FrameTotal[9]);
    });
  });

  describe("#frame", function(){
    it("adds scores to game.frames", function(){
      frame.RollOne(4);
      frame.RollTwo(5);
      frame.FrameTotal();
      game.addFrame(frame);
      expect(this._frames).toEqual(game._frames[9]);
    });
    it("clears frame after scroe recorded", function(){
      frame.RollOne(4);
      frame.RollTwo(5);
      frame.FrameTotal();
      game.addFrame(frame);
      expect(frame._FrameTotal).toEqual([])
    })
  });
});
