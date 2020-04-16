var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting - 'I see you like that late night music!';
} else if (hourNow > 12) {
    greeting = 'Ah, you dig those work day tunes. Nice!';
} else if (hourNow > 0) {
    greeting = 'You clearly enjoy those morning coffee playlists!';
} else {
    greeting = 'You should seriously listen to Bill Withers my dudes!';
}

document.write('<h3>' + greeting + '</h3>');
