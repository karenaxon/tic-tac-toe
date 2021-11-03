function Space() {
  this.pairsToCheck = [];
  this.value = ""; // x o or blank
}

Space.prototype.addPairToCheck = function(space1, space2) {
  this.pairsToCheck.push([space1, space2]);
};


////////Tests//////////
let space1 = new Space();
let space2 = new Space();
let space3 = new Space();
space2.addPairToCheck(space1,space3);
console.log(space2.pairsToCheck[0][0]);