-- We need a function that can transform a number into a string.
-- What ways of achieving this do you know?

function numberToString(num) {
  return num.toString();
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return(-number);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

-- Write a program that returns the age (0-9) as an integer.

-- Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number: 

function getAge(inputString){
  return parseInt(inputString);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

-- Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool){
  return bool ? "Yes" : 'No'
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

-- Return  sum of only positive values from array

function positiveSum (arr) {
  return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
} 
or
function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
    if (arr[i] > 0) {                   // if arr[i] is greater than zero
      total += arr[i];                  // add arr[i] to total
    }
  }
  return total;                         // return total
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

-- Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n) {
let arr = []
for(let i = 0; i <= n; i++) {
  arr.push(Math.pow(2, i))
  }
  return arr
  }
  console.log(powersOfTwo(4)) // returns [1,2,4,8,16]
  
  ---------------------------------------------------------------------------------------------------------------------------------------------------
 ----------------------------------------------------------------------------------------------------------------------------------------------

-- Repeat a given string a specific number of times:

function repeatStr (num, str) {
return str.repeat(num)
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

-- Nathan loves cycling.
-- Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
-- You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  return Math.floor(time * 0.5);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

-- Complete the square sum function so that it squares each number passed into it and then sums the results together.

const squareSum = numbers => numbers.reduce((acc, num) => acc + (num * num), 0)

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

-- Given an array of integers, return a new array with each value doubled.

function maps(x){
  return x.map(n => n * 2);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------------------

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- Remove all spaces from a given string:

function noSpaces(x) {
return x.split(' ').join('')

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
-- Given a year, return the century it is in.

const century = year => Math.ceil(year/100)

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- We need a function that can transform a string into a number. What ways of achieving this do you know?

var stringToNumber = function(str){
  return parseInt(str);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?



function makeNegative(num) {
  return -Math.abs(num);
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

-- Convert a boolean value to its string equivalent (true -> "true").

function booleanToString(b){
  return b.toString();
}

---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------

  The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
  
  function basicOp(char, value1, value2)
{
switch(char) {
  case '+':
     return value1 + value2;
    break;
  case '-':
     return value1 - value2
    break;
  case '*':
     return value1 * value2
    break;
  case '/':
     return value1 / value2
}
}

console.log(basicOp('+', 4, 7))
  
  ---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
  
  //Return a greeting statement that uses an input. 
  
  function greet(name) {
  return `Hello, ${name} how are you doing today?`
}
  
 ---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
  
 // Convert a number to a reversed array of digits
  
  function digitze(n) {
    return String(n).split("").map(Number).reverse()
}
  
 ---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
  
  //Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
  
function greet(name) {
 if(name === "Johnny") {
   return "Hello, my love!"
} else {
  return "Hello, " + name + "!"
}
}
  

 ---------------------------------------------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------------------------------------------
