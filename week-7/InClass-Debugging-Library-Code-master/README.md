# Debugging My Book Library

My website should be able to:

- View a list of books that I've read
- Add books to a list of books that I've read
  - Including title, author, number of pages and if I've read it
  - If any of the information is missing it shouldn't add the book and should show an alert
- Remove books from my list

## Task

This purposefully broken website should use the tools we talked about in the lesson.

You can find a working version of this here:
https://arodrigues92.github.io/library/

Some interesting links related to debugging

https://github.com/CodeYourFuture/syllabus/tree/london/js-core-3/tv-show-dom-project

https://developers.google.com/web/tools/chrome-devtools/console/utilities

https://www.atlasobscura.com/places/grace-hoppers-bug

Little dev tools UI tip: if you hit Esc on your keyboard, it opens a mini-console at the bottom of the dev tools (you might need to drag it up a bit). Hitting Esc again will hide it. I use this often when using the $0 “magic variable” that Neill mentioned

Ways.ToDebug -  Case sensitivity is worth drawing attention to - catches them all daily, of course.  Always speak to yourself when you coding, speak loudly, explain your code to the duck :)  

** https://rubberduckdebugging.com/ ☝🏼 for more information on Rubber Duck debugging

https://www.w3schools.com/js/js_whereto.asp

 https://www.w3schools.com/js/js_whereto.asp For debugging CSS this is a good source 

https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS

https://gist.github.com/timvisee/fcda9bbdff88d45cc9061606b4b923ca
Falsehoods programmers believe about time
This is a compiled list of falsehoods programmers tend to believe about working with time.

if (3 > Math.PI) {
    console.log(“wait what?“);
};

=========
var number = 1;

=====
var charge = function () {
    if (sunny) {
        useSolarCells();
    } else {
        promptBikeRide();
    }
};


syntax errors ———————— corrected

var word = "hello";
word.substring(1);
//
function numbers() {
  var a = 2;
  var b = 3;
console.log(a);
  return a + b;
};
numbers(); = call the function by it's name

//
var charge = function() {
  if (sunny) {
    useSolarCells();
  } else {
    promptBikeRide();
  }
};
//
var numbers = { a: 13, b: 37, c: 42 };

numbers.forEach(function (num) {
    return num * 2;
});

var submit = document.getElementById("button");

//
var numbers = { a:13, b: 37, c:42};

number.map( number => {
function (number) {
return number * 2
});

//
var submit = document.getElementById("button");
//
var numbers = {a: 13, b: 37, c: 42};
Object.values(numbers).map(function (num) {
  return num * 2;
});


