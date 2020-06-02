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

//The "." character is a wildcard
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true

//Hard brackets "[]" define a set of characters that are acceptable
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null

//A hyphen can be used to match anything between two latters "[a-e]"
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null

//Hyphens can also be used for numbers "[0-5]""
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig; // matches all letters and numbers in jennyStr
jennyStr.match(myRegex);