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
  let dumbMove = false;
  if (Math.random() > .65) {
    dumbMove = true;
  }
  let targetSpace = [this.checkOneOffs('o'), this.checkOneOffs('d'), this.checkCenter(), this.checkCorner(), this.checkEdge(), this.anyOpenSpace()];
  for(let i = 0; i < targetSpace.length; i++) {
    if(targetSpace[i] != -1){
      if (dumbMove) {
        dumbMove = false;
        continue;
      }
      this.updateSpace(targetSpace[i]);
      $("#" + targetSpace[i]).html("<p>" + this.spaces[targetSpace[i]].value + "</p>");
      break;
    }
  }
}

Board.prototype.checkOneOffs = function(mode) {
  let mark = '';
  switch (mode) {
    case ('o'):
      mark = this.nextMark;
      break;
    case ('d'):
      if (this.nextMark === 'o') {
        mark = 'x';
      } else {
        mark = 'o';
      }
  }
  
  for(let space of this.spaces){
    if (space.pairsToCheck.length > 0) {
      for (let pair of space.pairsToCheck) {
        let blankCount = 0;
        let blankSpace = 0;
        let markCount = 0;
        for (i of [space, pair[0], pair[1]]) {
          if (i.value === '') {
            blankCount++;
            blankSpace = this.spaces.indexOf(i);
          }
          if (i.value === mark) {
            markCount++
          }
        }
        if (blankCount === 1 && markCount === 2) {
          return blankSpace;
        }
      }
    }
  }
  return -1;
}

Board.prototype.checkCenter = function() {
  if(this.checkSpace(4) === ""){
    return 4;
  }
  return -1;
};

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
};

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
};

Board.prototype.anyOpenSpace = function() {
  for (let i = 0; i < 9; i++) {
    if (this.checkSpace(i) === '') {
      return i;
    }
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
  let moveCount = 0;
  $(".spaceDiv").click(function() {
    let clickedSpace = parseInt(this.id);
    if (playing && (board1.checkSpace(clickedSpace) === '')){
      board1.updateSpace(clickedSpace);
      $("#" + clickedSpace).html("<p>" + board1.spaces[clickedSpace].value + "</p>");
      if (board1.checkForWin()) {
        $("#win").prepend(board1.nextMark + " wins!");
        $("#win").show();
        playing = false;
      }
      moveCount++;
      if (playing && moveCount === 9) {
        $("#win").prepend("Draw.");
        $("#win").show();
        playing = false;
      }
      board1.switchMark();
      //if the user is playing against the computer this is where computer move goes
      if (playing) {
        board1.computerMove();
        moveCount++;
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

  drawStars();
});

 
//canvas
function drawStars() {
  for (let c = 0; c < 5; c++) {
    let starCanvas = document.getElementById('scroll-starfield' + c.toString());
    let context = starCanvas.getContext("2d");
    for (let i = 0; i <= 400; i++) {
      let x = Math.random() * starCanvas.width;
      let y = Math.random() * starCanvas.height;
      let radius = Math.random() * 1.2;
      context.beginPath();
      context.arc(x, y, radius, 0, 360);
      context.fillStyle = "rgb(255, 255, 255)";
      context.fill();
    }
  }
}