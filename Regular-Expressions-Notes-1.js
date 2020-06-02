// .test() tests whether a regex is included in a string, returns true or false.
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr); //Returns true

//The | character can be used to search for multiple strings
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString); //Returns true

//Appending "i" to a regex will ignore case
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
let result = fccRegex.test(myString); //Returns true

//.match will return the matched string. Regex goes in the ().
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // Returns ["expressions"]

//The "g" flag will return repeated matches
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; //Uses both g and i to get multiple matches and ignore case
let result = twinkleStar.match(starRegex);

