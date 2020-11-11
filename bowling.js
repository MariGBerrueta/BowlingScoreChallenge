class BowlingGame {
  constructor () {//builds the object BowlingGame 
    this.rolls = [];
    this.currentRoll = 0;
  }
  roll (pins) { //gets the number of pins knocked down in every try, and its current position in the global frame
    this.rolls[this.currentRoll++] = pins;
  }
  score () {  //calculates score
    let score = 0;
    let frameIndex = 0;
    let self = this; // saves bowlingGame object's context

    function frameScore() { //adds the number of pins knocked down in one try and the pins subsequent to that one
      return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
    }

    function spareScore() {//returns the number that will need to be added up as bonus for a spare
      return self.rolls[frameIndex + 2];
    }

    function strikeScore() {//returns the bonus for a strike
      return self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2];
    }

    function strike() { //tells the code what is a strike
      return self.rolls[frameIndex] === 10;
    }

    function spare() { //tells the code what is a spare
      return self.rolls[frameIndex] + self.rolls[frameIndex + 1] === 10;
    }

    for (let frame = 0; frame < 10; frame++) { //calculates score and tells the code where to direct itself after it
      if (strike()) {
        score += 10 + strikeScore();
        frameIndex++;
      } else if (spare()) {
        score += 10 + spareScore();
        frameIndex += 2;
      } else {
        score += frameScore();
        frameIndex += 2;
      }
    }	
    return score; //returns total score
	}
}

let newGame = new BowlingGame(); //saves BowlingGame object in newGame
for (let i = 0; i < 20; i++) { //loops through the method "roll" 20 times to establish the pins thrown in each try
  newGame.roll(10);
};

console.log(newGame.score()); //calls the score method inside BowlingGame prototype and applies it to newGame