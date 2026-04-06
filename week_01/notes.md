## Learning Objectives
* JavaScript Basics
* Variables, Data Types, Conditional Statments, and Functions
* Basic Debugging and Problem Solving
* Software Repositories

1.1 Problem Solving

1.2 JavaScript Basics
Odin Project

The Odin Project - Fundamentals Part 1
Variables and Operators
  Lesson Overview:
  * Running JavaScript code using an HTML file
  * Declaring variables with let and const
  * Performing string operations
  * Performing number operations
  * Using logical and mathematical operators

How to run JavaScript code
  A HTML file with JavaScript code inside of it.
  <script></script>
  Through an external script.
  <script src="javascript.js"></script>

Variables
  Declare variables using the let keyword
  When re-assign variables, the let keyword can be left out
  const keyword is used for constant variables.
  var was the original way variables were declared, it's similar to let.

Numbers
  JavaScript follows the standard mathematical order of operations.






The Odin Project - Fundamentals Part 2
Data Types and Conditionals
  Lesson Overview:
  * Name the eight data types in JavaScript
  * Understand the difference between single,double, and backtick quotes
  * Embed a variable/expression in a string
  * Understand what a method is.
  * Name the three logical operators
  * Understand what the comparison operators are
  * Understand waht conditionals are
  * Understand what nesting is
  * Understand what truthy and falsy values are


Strings
  A string is a piece of text.
  MDN tutorial on strings in JavaScript
  You can choosr single quotes ', double quotes ", or backticks ` to wrap your strings in.
  backticks are called template literal. Tbey behave the as normal strings, but you can emded JavaScript in them. ANd declare template literals over multiple lines.
  const greeting = `Hello, ${name}`
  joining strings together is called concatenation
  Template literals respect the line breaks in the source code.
  To have theequivalent output using a normal string you'd have to include line break characters \n
  Including quotes in strings, is to use one of the other characters to declare the string, and another option is to escape the problem quotation mark. In JavaScript, we do this by putting a backslash just before the character 'I\'ve got no right to';
  When concatenate a string and number, the browser automatically converts the number to a string and concatenates the two strings

  W3Schools lesson on string methods
  JavaScript strings are primitive and immutable: All string methods produce a new string without altering the original string
  let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let length = text.length;
  Method is a bit of functionality built into the language or specific data types.

  Conditionals
    Comparisons
    String comparison, to see whether a string is greater than another, JavaScript uses the so-called "dictionary" or "lexicographical" order
    When comparing values of different types, JavaScript converts the values to numbers.
    Strict equality is ===
    Comparison operators return a boolean value.
    Strings are compared letter-by-letter in the “dictionary” order.
    When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
    The values null and undefined are equal == to themselves and each other, but do not equal any other value.
    Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.