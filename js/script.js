/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
 * 10x
***/


const quotes = [
  {
    quote:  "When you come to a fork in the road, take it.",
      source:  "Yogi Berra",
      citation: "The Yogi Book:  I really Didn't say Everything I said!",
      year: "1998",
      tags: ""
    },
    {
      quote: "Always go to other people's funerals, otherwise they won't come to yours.", 
      source:  "Yogi Berra*",
      citation: "Actual source:  J.F. Shaw Kennedy",
      year: "1876",
      tags: "*false attribution"

    },
    {
      quote:  "No one goes there nowadays, it's too crowded.", 
      source: "Yogi Berra",
      citation: "Phil Rizzuto interview",
      year: "1984",
      tags: ""
    },
    {
      quote:  "The future ain't what it used to be.",
      source:  "Yogi Berra",
      citation: "The Yogi Book",
      year: "1998", 
      tags: ""
    },
    { 
     quote:  "Every strike brings me closer to the next homerun.",
      source:  "Babe Ruth",
      citation: "",
      year: "1916",
      tags: "" 
    },
    {
      quote:  "If my uniform doesn't get dirty, I haven't done anything in the baseball game.",
      source:  "Rickey Henderson",
      citation: "",
      year: "2001",
      tags: ""
    },
      {
      quote:  "Fans don't boo nobodies.",
      source:  "Reggie Jackson",
      citation: "Baseball Illustrated",
      year: "1975", 
      tags: ""
      },
      {
      quote:  "Today I consider myself the luckiest man on the face of the earth.",
      source:  "Lou Gehrig",
      citation: "Baseball Almanac",
      year: "July 4, 1939, Lou Gehrig Appreciation Day",
      tags: ""
    },
    {
      quote:  "There's no crying in baseball!",
      source:  'Tom Hanks',
      citation: 'A League of Their Own',
      year: '1992',
      tags: ""
    },
    {
      quote:  "...The two most important things in life are good friends and a good bullpen.",
      source:  "Bob Lemon",
      citation: "",
      year: "",
      tags: ""
    }];

  // declare variables
var random;
var choice;
var string = "";
var color = "";
// quotes shouldn't repeat until all have been called
// start by initializing array of used random numbers

var usedRandomNumbers = [];
// create counter to track when all quotes have been used
var counter = 0;



// declare function to increase counter and reset once all quotes have been displayed
function quotesUsed() {
  counter += 1;
  // if all quotes have been used once, reset array of used numbers
  if (counter === quotes.length) {
     usedRandomNumbers.length = 0;
     counter = 0;
  }
}

// create function to randomly change the background color
// function creates random values
function rgbRandom() {
  return Math.floor(Math.random() * 256);
}
// next, create string and add to html
function colorChange() {
  color = 'rgb(' + rgbRandom() + ',' + rgbRandom() + ',' + rgbRandom() + ')';
  document.getElementById("color").style.backgroundColor = color;
}


/* function to select a random quote object from array,
  and test to see if quote already called,
  then return quote object */
function getRandomQuote() {

  // generate random number between 0 and number of values in array
    random = Math.floor(Math.random() * quotes.length);
      // if number not already used, add it to used numbers and return random quote
      if (usedRandomNumbers.indexOf(random) === -1) {
          usedRandomNumbers.push(random);
          quotesUsed();
          return quotes[random];
      // if it has been used, generate random numbers until you get a new one
      } else {
          while (usedRandomNumbers.indexOf(random) > -1) {
            random = Math.floor(Math.random() * quotes.length);
          }
          // then add to used numbers and return random quote
          usedRandomNumbers.push(random);
          quotesUsed();
          return quotes[random];
      }
}

// function prints quote to the page and changes background color
function printQuote() {
  // call colorChange
  colorChange();
  // call getRandomQuote, store returned quote object in a variable
  choice = getRandomQuote();
  // construct a string using the different properties of the quote object
  string = "";
  string += '<p class="quote">' + choice.quote + '</p>';
  string += '<p class="source">' + choice.source;
      /* printQuote doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing or a <tag class> if tag is missing */
      if (choice.citation !== "") {
      string += '<span class="citation">' + choice.citation + '</span>';
      }
      if (choice.year !== "") {
      string += '<span class="year">' + choice.year + '</span>';
      }
      if (choice.tags !== "") {
      string += '<span class="tags">' + choice.tags + '</span>';
      }
  string += '</p>';

  // display HTML string to the page
  document.getElementById('quote-box').innerHTML = string;
}

// add event listener to respond to clicks on the page
// when user clicks anywhere on the page, the printQuote function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//call printQuote every 12 seconds
window.setInterval(printQuote, 12000);