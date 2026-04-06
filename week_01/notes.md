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
    We wanted to make a special mention of testing boolean (true/false) values, and a common pattern you'll come across again and again. Any value that is not false, undefined, null, 0, NaN, or an empty string ('') actually returns true when tested as a conditional statement, therefore you can use a variable name on its own to test whether it is true, or even that it exists (that is, it is not undefined.) So for example:

    && — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.
    || — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.

    The last type of logical operator, NOT, expressed by the ! operator, can be used to negate an expression. Let's combine it with OR in the above example:

    if...else statements do the job of enabling conditional code well, but they are not without their downsides. They are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex (for example, multiple logical operators). For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large number of choices.

    In such a case, switch statements are your friend — they take a single expression/value as an input, and then look through several choices until they find one that matches that value, executing the corresponding code that goes along with it. Here's some more pseudocode, to give you an idea:

    There is one final bit of syntax we want to introduce you to before we get you to play with some examples. The ternary or conditional operator is a small bit of syntax that tests a condition and returns one value/expression if it is true, and another if it is false — this can be useful in some situations, and can take up a lot less code than an if...else block if you have two choices that are chosen between via a true/false condition. The pseudocode looks like this:



The Odin Project - Fundamentals Part 3
  Function Basics
  Lesson Overview:
    How to define and invoke different kinds of functions
    How to use the return value
    What function scope is

  Functions
    In JavaScript, parameters are the items listed between the parentheses () in the function declaration. Function arguments are the actual values we decide to pass to the function.





1.3 JavaScript Naming and Style Conventions
  Naming Conventions
    Use camelCase for variables and functions such as firstName and messageString().
    Use PascalCase for class names like ShoppingCart.
    Use the UPPER_SNAKE_CASE for constants like MAX_USERS
    Avoid using single-letter names except for loop counters like i, j, or k.
    All names should start with letters.

  Function Names
    Function names should describe the functionality of the function, hence should be verbs. For example, calculateSum() means the function calculates the sum and sendEmail() sends email. Also, functions that return true/false, can start with 'is', 'has', or 'can', for example, isValid() or hasPermission().

  Code Readability
    Use let and const instead of var
    Keep consistent indentation and spacing. Many editors have code formatters which will help keep you code consisten.
    Use template literals for combining strings rather than the + operator.
    Avoid magic numbers by giving meaningful names to constants.
    Comment your code to explain why something is done rather than what it does.


1.4 Debugging Basics
  When writing code, it is possible for code to be prone to many errors:

    Syntax errors occur when you have typos in code or miss brackets.
    Reference errors occur when you refer to undefined variables.
    Type errors occur when you use incorrect operations on values.
    Logical errors happen when code runs but produces the wrong results.

    In order to successfully debug, there are many tools we can utilize:

    console.log() can be used for checking variable values and program flow.
    console.error() allows us to see the error messages.
    debugger; allows us to pause code execution and inspect variables.

  We should also follow tips and best practices for debugging:

    Test code incrementally because managing small chunks is easier than debugging the entire code at once.
    Use descriptive variable names for easier debugging.
    Comment out parts of code to isolate problems.
    Read error messages carefully and try to understand what they indicate.

    




1.5 Software Repositories
  A software repository, often called a "repo", is a centralized storage location for code and related files used in software development. Software repositories allows developers to track changes to code, revert to previous versions of code and merge different branches of development.
  
