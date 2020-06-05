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

//[^] can be used to match not equal to a set of characters. Only works inside [].
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig; // match anything not a vowel or a number
let result = quoteSample.match(myRegex);

//+ will return multiple of the same character (or group of characters)
let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Match s or consecutive s's
let result = difficultSpelling.match(myRegex); //Returns ['ss' , 'ss']

//* will match zero or more of the character (or group of characters)
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]

//Regex will default to the largest possible answer (greedy).
//? will search for the shortest possible string (lazy).
let text ="titanic";
let myRegex = /t[a-z]*i/; // search for the smallest form of t + anything + i
let result = text.match(myRegex); //returns 'ti' instead of 'titani'

//^ will search only the beginning of a string (when not inside [])
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);// Returns true

//$ can be used at the end of a Regex to find characters at the end of a string
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding); // Returns true

//'\w' will search for any letter, number, or '_'. [A-Za-z0-9_]
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length; //Counts the letters and numbers in the phrase

//'\W' will search for everything NOT included in [A-Za-z0-9_]
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;//Counts the spaces and punctuation

//'\d' will search for numbers [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length; //Counts the number of digits

//'\D' will match all non-numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;

//'\s' matches whitespace, carriage return, tab, form feed, and new line characters
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex); // Returns [" ", " "]

//'\S' matches everything except white spaces
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32

//{} can specify the lower and upper bound on number of characters to return
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

//Can also specify only lower number {3,} or only higher number {,5}

//Match exect number with no comma {4}

//? tests for zero or one of a character
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true

