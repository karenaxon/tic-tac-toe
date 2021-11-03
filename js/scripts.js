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

function Space() {
  this.pairsToCheck = [];
  this.value = ""; // x o or blank
}

Space.prototype.addPairToCheck = function(space1, space2) {
  this.pairsToCheck.push([space1, space2]);
};

Board.prototype.checkSpace = function(number) {
  return spaces[number].value;
};

Board.prototype.updateSpace = function(number) {
  if (this.checkSpace(number) !== "") {
    return false;
  }
  spaces[number].value = this.nextMark;
  this.switchMark();
};

Board.prototype.switchMark = function() {
  if (this.nextMark === 'x') {
    this.nextMark = 'o';
  } else {
    this.nextMark = 'x'
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
}

let board1 = new Board();
console.log(board1.spaces[4].pairsToCheck);