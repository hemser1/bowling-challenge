$(document).ready(function(){
  var game = new Game();
  showScores();

  $("#enter-throw").click(function(){
    game.rollOne($("#roll-one"));
    game.rollTwo($("#roll-two"));
    game.frameTotal();
    game.addFrame();
  });
});

function showScores() {
  game.frames();
};
