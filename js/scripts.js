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

  
  this.nextMark = 'x';
};

function Space() {
  this.pairsToCheck = [];
  this.value = ""; // x o or blank
}

Space.prototype.addPairToCheck = function(space1, space2) {
  this.pairsToCheck.push([space1, space2]);
};


////////Tests//////////
// let space1 = new Space();
// let space2 = new Space();
// let space3 = new Space();
space2.addPairToCheck(space1,space3);
console.log(space2.pairsToCheck[0][0]);