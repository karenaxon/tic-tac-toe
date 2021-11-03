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
```
Describe: