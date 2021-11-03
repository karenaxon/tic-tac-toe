## Tests

```
Describe: Space()
Test: It should return an object with an array of neighbors and a value ("", x, o);
Code: 
      let space1 = new Space();
      console.log(space1.value);
Expected Output: ""

Describe: Space.prototype.addPairToCheck()
Test: It should add a pair of pointers to the pairsToCheck array inside the space object
Code: 
      let space1 = new Space();
      let space2 = new Space();
      let space3 = new Space();
      space2.addPairToCheck(space1,space3);
      console.log(space2.pairsToCheck[0][0]);
Expected Output: "Object"

Describe: Board()
Test: It should return an object with nine spaces, an array that includes the nine spaces and an x as the mark.
Code:
      let board1 = new Board();
      console.log(board1.spaces[4], board1.nextMark);
Expected Output: "Object" 'x'

Test: It should run addPairToCheck for every edge space that has a neighbor and the center space (four).
Code:
      let board1 = new Board();
      console.log(board1.spaces[4].pairsToCheck);
Expected Output: [[], [], [], []]
      

```
