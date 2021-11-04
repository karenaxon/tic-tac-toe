# _Tic Tak Toe IN SPACE!_

#### By _**Aaron Minnick, Karen Axon, & Skylar Brockbank**_

#### _A Tic Tak Toe Website with a computer player option_

## Technologies Used

* _HTML_
* _CSS(Bootstrap)_
* _Git_
* _Javascript_
* _JQuery_

## Description

_A tic tak toe game with single and 2 player modes. The single player mode as a computer player designed to play a series of fun games of tic tak toe with the user_

## Setup/Installation Requirements

* _Click the green "Code" button and Download Zip _
* _Extract the contents of the zip file to a folder on your machine_
* _Run the Index.html file with your browser of choice (I recommend Chrome)_

* _alternatively you can [clone this repository](https://www.learnhowtoprogram.com/introduction-to-programming/git-html-and-css/practice-github-remote-repositories) from Git Hub_


## Known Bugs

* _No Known Bugs_

## License

*[MIT](https://opensource.org/licenses/MIT) Licenced
*Copyright (c) _2021_ _Aaron Minnick_ _Karen Axon_ _Skylar Brockbank_

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
      
Etc...
```
