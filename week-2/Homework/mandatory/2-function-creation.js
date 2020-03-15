/*
reading list
- https://github.com/thejsway/thejsway
- https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99

Write a function that:
- takes an array of strings as input

- removes any spaces in the beginning or end of the strings
// something.trim()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

- removes any forward slashes (/) in the strings
// something.replace()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

- makes the string all lowercase
// something.toLowerCase()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

*/
 
//Input: string, output: string
function tidyUpString(strArr) { 

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].trim();
    strArr[i] = strArr[i].replace("/", "");
    strArr[i] = strArr[i].toLowerCase();
}
 return strArr;
}

// console.log(tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]))

/*
https://www.w3schools.com/js/js_comparisons.asp
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}
https://www.w3schools.com/js/js_if_else.asp

Complete the function to check if the variable `num` satisfies the following requirements:
- is a number
- is even
- is less than or equal to 100
Tip: use logical operators
*/

function validate(num) {
  if (typeof num === 'number' && num % 2 === 0 && num <= 100){
    return true
  } else{
    return false
  }
}

/* 
test(
  "remove function works - case 1",
  arraysEqual(remove([10, 293, 292, 176, 29], 3), [10, 293, 292, 29])
);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

Write a function that removes an element from an array [after index 6]
The function must:
- NOT change the original array
- return a new array with the item removed
- remove the item at the specified index
*/

function remove(arr, index) {
  let newArr = arr.slice()
    newArr.splice(index, 1)
    return newArr
}
//console.log(remove([10, 293, 292, 176, 29], 3))

/*
Write a function that:
- takes an array of numbers as input
- returns an array of strings formatted as percentages (e.g. 10 => "10%")
- the numbers must be rounded to 2 decimal places
- numbers greater 100 must be replaced with 100


  arraysEqual(formatPercentage([23, 18, 187.2, 0.372]), [
    "23%",
    "18%",
    "100%",
    "0.37%"
*/
//forEach
function formatPercentage(arr) {
  
  for (let i = 0; i < arr.length; i++) {

    if (arr[i]> 100) {arr[i] = 100}
    arr[i] = Math.round(arr[i]*100) / 100;
    arr[i] = arr[i].toString();
    arr[i] = arr[i].concat("%");
  }
 return arr
}
  console.log(formatPercentage([23, 18, 187.2, 0.372]))

/* ======= TESTS - DO NOT MODIFY ===== */

function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }

  return true;
}

function test(test_name, expr) {
  let status;
  if (expr) {
    status = "PASSED";
  } else {
    status = "FAILED";
  }

  console.log(`${test_name}: ${status}`);
}

test(
  "tidyUpString function works - case 1",
  arraysEqual(tidyUpString(["/Daniel ", "irina ", " Gordon", "ashleigh "]), [
    "daniel",
    "irina",
    "gordon",
    "ashleigh"
  ])
);
test(
  "tidyUpString function works - case 2",
  arraysEqual(tidyUpString([" /Sanyia ", " Michael ", "AnTHonY ", "   Tim   "]),
    ["sanyia", "michael", "anthony", "tim"]
  )
);

test("validate function works - case 1", validate(10) === true);
test("validate function works - case 2", validate(18) === true);
test("validate function works - case 3", validate(17) === false);
test("validate function works - case 4", validate("Ten") === false);
test("validate function works - case 5", validate(108) === false);

test(
  "remove function works - case 1",
  arraysEqual(remove([10, 293, 292, 176, 29], 3), [10, 293, 292, 29])
);
test(
  "remove function works - case 1",
  arraysEqual(remove(["a", "b", "c", "d", "e", "f", "g"], 6), [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f"
  ])
);

test(
  "formatPercentage function works - case 1",
  arraysEqual(formatPercentage([23, 18, 187.2, 0.372]), [
    "23%",
    "18%",
    "100%",
    "0.37%"
  ])
);