'use strict'

alert('Welcome to MusicWorld. Thanks for visiting.');

function askName() {
  var newQuestion = prompt('What is your name?');
  // var nextQuestion = prompt ('Name one of your favorite band');
  // console.log(newQuestion)
} 

function askBand() {

  var correctAnswer = 'England';

  for(var i = 0; i < 3; i = i + 1) {
    var countryGuess = prompt('Is Radiohead from England, The United States, or Canada?');
    if(countryGuess == correctAnswer) {
      alert('Well done!');
      break;
    } else {
      alert('Sorry, that is wrong. Please try again.');
    }
    console.log('this is i' + i);
    if(i == 2) {
      alert('That is just weak.');
    }
  }
}

askName();
askBand()

function myFunction() {
  var genre = prompt('What is your favorite genre of music?');
  var response;

  if (genre === 'funk') {
    response = 'I see you have the phunk deep inside of you.';
  } else {
    response = 'I would have preferred if it was funk, but this will do.';
  }  
  
  alert(response);
}
  myFunction();

/*function getTimeofDay() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;

  if (hourNow > 18) {
    greeting = 'Ah, I see you dig that evening music!';
  } else if (hourNow > 12) {
    greeting = 'You dig those lunchtime beats? Groovy.';
  } else if (hourNow > 0) {
    greeting = 'I see you dig those morning tunes. Nice.';
  } else {
    greeting = 'I dig your vibe.';
  }

    document.write('<h3>' + greeting + '</3>');*/

/*function myFunction() {
  var genre = prompt("What's your favorite genre of music?", "Soul");
  var response;

  if (genre = funk) {
    response = 'I see you have the phunk deep inside of you.';
  } else {
    greeting = 'I would have preferred if it was funk, but this will do.';
  }
  
  document.write('<h3>' + response + '</h3>')*/

    // document.getElementById("genre").innerHTML =
    // "Great taste in tunes you funky beast!";



/*function askBand() {
  var newQuestion = prompt('Name one of your favorite bands');
}*/

// askBand();


/*var today = new Date();
var hourNow = today.getHours(); 
var greeting;

if (hourNow > 18) {
  greeting = 'Ah, I see you dig that evening music!';
} else if (hourNow > 12) {
  greeting = 'You dig those lunchtime beats? Peachy.';
} else if (hourNow > 0) {
  greeting = 'I see you dig those morning tunes. Nice.';
} else {
  greeting = 'Dig those funky tunes';
}

document.write('<h3>' + greeting + '</h3>');*/

