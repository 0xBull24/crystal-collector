// Strict
"use strict";

// Game Object
var game = {
  targetScore: Math.floor(Math.random() * (120 - 19 + 1)) + 19,
  wins: 0,
  losses: 0,
  clicks: 0,
  playerScore: 0,

  reset: function() {

    // Reset session values
    this.targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    this.clicks = 0
    this.playerScore = 0

    // Reset Screen 
    $('.target').text(`Target Score is: ${game.targetScore}`);
    $('.playerscore').text(`Your Score is: ${game.playerScore}`)
    $('.clicks').text(`Clicks: ${game.clicks}`)
  },

  scoreCheck: function() {
    // Win / Loss Condition
    if (game.playerScore === game.targetScore) {
      game.wins++;
      $('.wins').text(`Wins: ${game.wins}`)
      game.reset();
    }

    else if (game.playerScore > game.targetScore){
      game.losses++;
      $('.losses').text(`losses: ${game.losses}`)
      game.reset();
    }
  }
}

// Crystal Objects
var redCrystal = {
  randomValue: Math.floor(Math.random() * (12 - 1 + 1) + 1)
}

var purpleCrystal = {
  randomValue: Math.floor(Math.random() * (12 - 1 + 1) + 1)
}

var blueCrystal = {
  randomValue: Math.floor(Math.random() * (12 - 1 + 1) + 1)
}

var orangeCrystal = {
  randomValue: Math.floor(Math.random() * (12 - 1 + 1) + 1)
}

// Once page is loaded - Actions from the page that can take place
$(document).ready(function(){
  $('.target').text(`Target Score is: ${game.targetScore}`);

  // Gem Actions
  if ($('#red').click(function() {
        game.playerScore += redCrystal.randomValue
        game.clicks++
        game.scoreCheck();
        $('.playerscore').text(`Your Score is: ${game.playerScore}`)
        $('.clicks').text(`Clicks: ${game.clicks}`)
      }
    )
  )
  
  if ($('#orange').click(function() {
        game.playerScore += orangeCrystal.randomValue
        game.clicks++
        game.scoreCheck();
        $('.playerscore').text(`Your Score is: ${game.playerScore}`)
        $('.clicks').text(`Clicks: ${game.clicks}`)
      }
    )
  )

  if ($('#blue').click(function() {
        game.playerScore += blueCrystal.randomValue
        game.clicks++
        game.scoreCheck();
        $('.playerscore').text(`Your Score is: ${game.playerScore}`)
        $('.clicks').text(`Clicks: ${game.clicks}`)
      }
    )
  )

  if ($('#purple').click(function() {
        game.playerScore += purpleCrystal.randomValue
        game.clicks++
        game.scoreCheck();
        $('.playerscore').text(`Your Score is: ${game.playerScore}`)
        $('.clicks').text(`Clicks: ${game.clicks}`)
      }
    )
  )

  // Reset Game
  $('#reset').on('click', function(){
    game.reset();
  })
})


// Tests
// console.log('The following tests are running: ')
// console.log(`The random target score for this game is: ${game.targetScore}`);
// console.log(`The random value for the red gem is ${redCrystal.randomValue}`);
// console.log(`The random value for the blue gem is ${blueCrystal.randomValue}`);
// console.log(`The random value for the orange gem is ${orangeCrystal.randomValue}`);
// console.log(`The random value for the purple gem is ${purpleCrystal.randomValue}`);

