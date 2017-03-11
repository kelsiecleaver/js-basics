/* Variables and Data Types */
/*Console.log each variable and test your code in the terminal using the Node REPL*/

/*i.e.*/

var pet = "sebastian the pug";
console.log(pet);

/**
* #1
* Variables with a String value
*
* Declare variables named `firstName`, `lastName`, `birthPlace`, `favoriteFood`, `bestMovie`, `favLoveSong`, `cuteAnimal`, `favColor`, `favSneaker`, `coffeeShop`.
* Assign values to these variables with your own data.
*
* Each value should be a String. 
**/
var firstName = "Kelsie";
var lastName = "Cleaver";
var birthPlace = "oregon";
var favoriteFood = "Pizza";
var bestMovie = "Goonies";
var favLoveSong = "none";
var cuteAnimal = "Bulldog";
var favColor = 'Pink';
var favSneaker = "Converse";
var coffeeShop = "Starbucks";

/**
* #2
* Variables with a Number value
*
* Declare variables named `favoriteNumber`, `currentYear`, `thatOnePrinceSong`, 'tokyoOlympics`, `mariahCareyAge`, `currentTemp`, `studentsInClass`, `numOfJapanPrefectures`, `currentIphoneModel` and `shoeSize`.     
*
* Each value should be a Number
**/
var favoriteNumber = 10;
var currentYear = 2017;
var thatOnePrinceSong = 1999;
var tokyoOlympiccs = 2020;
var mariahCareyAge = 46;
var currentTemp = 68;
var studentsInClass = 9;
var numOfJapanPrefectures = 47;
var currentIphoneModel = 6;
var shoeSize = 6;


/**
* #3
* Variables with a Boolean value
*
* Declare variables named `likesMcDonalds`, `watchedMrRobot`, `ranMarathon`, `wrestledABear`, `lovesDonuts`, `readHarryPotter`, `sleptInClass`, `drinksCoffee`, `shopsAtWholeFoods` and `ownsRedShoes`.     
*
* Each value should be a Boolean
**/
var likesMcdonalds = true;
var watchedMrRobot = false;
var ranMarathon = false;
var wrestledABear = false;
var lovesDonuts = true;
var readHarryPotter = false;
var sleptInClass = true;
var drinksCoffee = true;
var shopsAtWholeFoods = true;
var ownsRedShoes = false;


/**
* #4
* Variables with a Null value
*
* Declare variables named `completedPrepClass`, `traveledToMars` and `scoredTDinNFL`.
*
* Each value should be Null 
**/
var completedPrepClass = null;
var traveledToMars = null;
var scoredTDinNFL = null;


/*
#5. 
* What is the difference between null and undefined? Type your answer in two or three commented-out sentences.
*/
//Undefined means a variable has been declared but has not been assigned a value. Null is assigned a value but the value of null is nothing.

/**
* #6
* Variables with an Array value
* 
* Declare a variable named 'plateLunch` and assign it an array containing 5 of your favorite lunch items.
* Declare a variavle named `fruitBasket` and assign it an array containing 5 fruits of your choosing.
* Declare a variable named `westCoast` and assign it an array containing states found on the west coast of the US.
* Declare a variable named `lotteryResult and assign it an array containing 5 random numbers.
* Declare a variable named `duets` and assign it an array containing 3 nested arrays, each containing the names of 2 singers or bands.
* Declare a variable named `mixPlate` and assign it an array containing different data types of your choosing.
**/
var plateLunch = ["salad", "pasta", "sandwich", "soup", "burger"];
var fruitBasket = ["raspberries", "strawberries", "pineapple", "apple", "oranges"];
var westCoast = ["california", "oregon", "washington", "idaho", "nevada"];
var lotteryResult = ["56", "4", "17", "10", "45"];
var duets = [["michaelJackson", "sidahGarrett"], ["rKelly", "celineDion"], ["sonny", "char"]];
var mixPlate = ["string", "number", "object", "array", "null"];

// 7
// * Accessing Values in Arrays

var partyList = ["carrot cake", "rocky road ice cream", "mochiko chicken", "orange tang", "lemon bars"];

// What is the length of this array? Please print the length (a number) to the console.
// What is the index position of carrot cake? Please print this item to the console.
// What is the index position of lemon bars? Please print this item to the console.

console.log (partyList.length);
console.log (partyList[0]);
console.log (partyList[4]);

/*
* #8 
* Concatenation 
* Concatenate the variables `firstName` and `lastName` and store this to a new variable called `fullName`.

* Declare a new variable, `whereFrom`, and assign it the value of a string using the variables `fullName` and `birthPlace`:
 xx xx is from xx.
 e.g.
 Usain Bolt is from Jamaica.
 
*Declare a new variable, `mariahStory`. Assign it the value of concatenating the variables `mariahCareyAge`, `favSneaker`, `favLoveSong` and `coffeeShop` to create the following sentence:
At the age of xx, Mariah Carey, wearing her fancy xx, sang xx at the xx.
*/
var firstName = "Kelsie";
var lastname = "Cleaver";
var fullName = firstName + " " + lastName;


var whereFrom = fullName + " is from " + birthPlace;
console.log(whereFrom);

var mariahCareyAge = 46;
var favSneaker = "Nike";
var favLoveSong = 'EndlessLove';
var coffeeShop = 'Starbucks';
 
 var mariahStory = " At the age of " + mariahCareyAge  + "," + " Mariah Carey, wearing her fancy " + favSneaker + "," + " sang " + favLoveSong + " at the " + coffeeShop;
 console.log(mariahStory);







/**
* #9 Arithmetic
* Variables with the outcome of an arithmetic operation.
* Declare two variables, `num1` and `num2` and assign each of these variables a number of your choosing.
* Next perform the following arithmetic operations:

* Add the two variables and store it to new variable named `sum`.
* Subtract the two variables and store it to a new variable named `difference`.
* Mulitply the two variables and store it to a new variable named `product`.
* Divide the two variables and store it to a new variable named `quotient`.
* What is the remainder when you divide num1 by num2? Print your answer to the console.
 **/
 
 var num1 = 54;
 var num2 = 98;
 
 var sum = num1 + num2;
 console.log(sum);
 var difference =  num1 - num2;
 console.log(difference);
 var product = num1 * num2;
 console.log(product);
 var quotient = num1 / num2;
 console.log(quotient);
 0.5510204081632653



/**
gh
* #10
* Comparisons & Logic
* Variables with the outcome of a comparison operation:
*
* Declare a variable named `isStrictlyEqual` and compare two strings "Tacocat" and "tacocat" using the strict equality.
* Declare another variable named `isLooselyEqual` and compare the two strings "Tacocat" and "tacocat" using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.

* Declare a variable named `sameNum` and compare a string "5" and a number 5 using strict equality.
* Declare another variable named `sameNumba` and compare a string "5" and a number 5 using equality.
* Print both variables to the console. If the answers are different, why? If not, why not? Write you answer two or three commented-out sentences.



* Use the logical && or || and compare the following:
* 3>2 3<1 (use or)
* 3>2 6>3 (use and)
* 7>2 8<5 (use and)
* Declare variables and print the results to the console. What are the differences between the three and why?
**/
var isStricktlyEqual = "Tacocat" === "tacocat";
console.log(isStricktlyEqual);
var isLooselyEqual = "Tacocat" == "tacocat";
console.log(isLooselyEqual);

/**
The answers are the same because the answers are not equal because there is a lowercase letters making them different. If the first letter of each word was capital they would be the same.
**/

var sameNum = "5" === 5;
console.log(sameNum);
var sameNumba = "5" == 5;
console.log(sameNumba);

/** The answers are different because one five is in a string and the other is not. One five is a number and one five is an object.
**/

var logical = 3>2 || 3<1; 
console.log(logical);
var isLogical = 3>2 && 6>3; 
console.log(isLogical);
var isillogical = 7>2 && 8<5; 
console.log(isillogical);

/** There are 2 variables that are logical because they are correct is greater than and less than. The last one is not logical because it can not be correct.
**/



/**
* #11
* Assignments
* Variables with the outcome of an assignment operation:
*
* Declare a variable named `myBox` and assign it with a number of your choosing.
* This variable will be used to store multiple types of values as we assign them to show how variables in JavaScript are not bound to a single data type
* and can change values.

* Write 5 different assignment statements and `console.log()` the value of the variable after each
* assignment statement to show the current value. REMEMBER: an assignment is DIFFERENT from a declaration.
**/
var myBox = 10;
myBox++;
myBox--;
myBox = 20;


/**
* Final Boss 
* Additional exercises designed to further challenge you and give you a jump start on the next topic that'll be covered.
* Function - A block of code designed to perform a particular task. It allows you to reuse code.
*
* Declare a function named `bakePie` which has a single parameter 'ingredient'.
* When the function is invoked, it should return a string, "Today's special ingredient pie." Where ingredient will be the value that you pass into the function.
* For example, if the value is `blueberry`, it should return "Today's special blueberry pie."
* Declare a variable 'pieResult' and assign it to the function call.
* Console.log the variable to see the result.


* Declare a Function named `jump` which has a single parameter, `height`.
* This function should return a string, "You jumped height feet high!" Where height will be the value that you pass into the function.
* For example, if the value is 9, it should return "You jumped 9 feet high!"
*
* Declare a variable 'jumpResult' and assign it to the function call.
* Console.log the variable to see the result.


* Declare a Function named `cook` which a takes three parameters, `ingredient1`, `ingredient2`, `recipeName`.
* This function should return a String along the lines of, "Tomatoes and Cheese make a Pizza!"
* if invoked in this way -> cook("Tomatoes", "Cheese", "Pizza");
**/