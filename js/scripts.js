//Objects
function Board() {
  let zero = new Space();
  let one = new Space();
  let two = new Space();
  let three = new Space();
  let four = new Space();
  let five = new Space();
  let six = new Space();
  let seven = new Space();
  let eight = new Space();
  this.spaces = [zero, one, two, three, four, five, six, seven, eight];
  one.addPairToCheck(zero, two);
  three.addPairToCheck(zero, six);
  four.addPairToCheck(zero, eight);
  four.addPairToCheck(one, seven);
  four.addPairToCheck(three, five);
  four.addPairToCheck(two, six);
  five.addPairToCheck(two, eight);  
  seven.addPairToCheck(six, eight);
  
  this.nextMark = 'x';
};


Board.prototype.checkSpace = function(number) {
  return this.spaces[number].value;
};

Board.prototype.updateSpace = function(number) {
  console.log(this.spaces[number]);
  this.spaces[number].value = this.nextMark;
};

Board.prototype.switchMark = function() {
  if (this.nextMark === 'x') {
    this.nextMark = 'o';
  } else {
    this.nextMark = 'x';
  }
};

Board.prototype.checkForWin = function() {
  for(let i of this.spaces){
    if ((i.value != '') && (i.pairsToCheck.length > 0)){
      for(let pair of i.pairsToCheck){
        if ((i.value===pair[0].value)&&(i.value===pair[1].value)){
          return true;
        }
      }
    }
  }
  return false;
};

Board.prototype.computerMove = function() {
  //maybe some randomness
  let targetSpace = [this.checkCenter(), this.checkCorner(), this.checkEdge()];
  for(let i =0; i < targetSpace.length; i++) {
    if(targetSpace[i] != -1){
      this.updateSpace(targetSpace[i]);
      $("#" + targetSpace[i]).html("<p>" + this.spaces[targetSpace[i]].value + "</p>");
      break;
    }
  }
}

Board.prototype.checkCenter = function() {
  if(this.checkSpace(4) === ""){
    return 4;
  }
  return -1;
}

Board.prototype.checkCorner = function(){
  let corners = [];
    for (let i of [0, 2, 6, 8]){
      if(this.checkSpace(i) === ""){
        corners.push(i);
      }
    }
    if (corners.length > 0){
      let selector = (parseInt(Math.random()*100))%(corners.length);
      return corners[selector];
    }else{
      return -1;
    }
}

Board.prototype.checkEdge = function(){
  let edges = [];
    for (let i of [1, 3, 5, 7]){
      if(this.checkSpace(i) === ""){
        edges.push(i);
      }
    }
    if (edges.length > 0){
      let selector = (parseInt(Math.random()*100))%(edges.length);
      return edges[selector];
    }else{
      return -1;
    }
}

function Space() {
  this.pairsToCheck = [];
  this.value = ""; // x o or blank
}

Space.prototype.addPairToCheck = function(space1, space2) {
  this.pairsToCheck.push([space1, space2]);
};

// UI logic

$(document).ready(function() {
  let board1 = new Board();
  let playing = true;
  let movecount = 0;
  $(".spaceDiv").click(function() {
    let clickedSpace = parseInt(this.id);
    if (playing && (board1.checkSpace(clickedSpace) === '')){
      board1.updateSpace(clickedSpace);
      movecount += 1;
      $("#" + clickedSpace).html("<p>" + board1.spaces[clickedSpace].value + "</p>");
      if (board1.checkForWin()) {
        $("#win").prepend(board1.nextMark + " wins!");
        $("#win").show();
        playing = false;
      }
      if (movecount === 9) {
        $("#win").prepend("Draw.");
        $("#win").show();
        playing = false;
      }
      board1.switchMark();
      //if the user is playing against the computer this is where computer move goes
      if (playing) {
        board1.computerMove();
        if (board1.checkForWin()) {
          $("#win").prepend(board1.nextMark + " wins!");
          $("#win").show();
          playing = false;
        }
        board1.switchMark();
      }
      
    }
  });

  $("#play-again").click(function() {
    location.reload();
  });
});
