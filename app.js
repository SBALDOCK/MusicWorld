var today = new Date();
var hourNow = today.getHours(); 
var greeting;

if (hourNow > 18) {
  greeting = 'Ah, I see you dig that evening music!';
} else if (hourNow > 12) {
  greeting = 'You dig those lunchtime beats? Dig.';
} else if (hourNow >= 0) {
  greeting = 'Give me my coffee and some tunes for my commute!';
} else {
  greeting = 'Dig those funky tunes';
}

document.write('<h3>' + greeting + '</h3>');

var person = prompt("Please enter your name", "Frank Zappa");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}

var genre = prompt("Please enter your favorite genre of music", "Soul");

if (genre != null) {
  document.getElementById("genre").innerHTML =
  "Great taste in tunes you funky beast!";
}
