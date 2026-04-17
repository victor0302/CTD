# JavaScript Loops and Arrays
## Learning Objectives

### This week's lesson will work with JavaScript loops and arrays and explore how scope is used to access data within code. Version control systems will also be explored to provide a basic understanding of saving and changing code over time after testing

    JavaScript Loops and Arrays
    Scope
    Version Control Systems




### Lesson Materials


### 2.1 Loops


#### mdn: Looping code

##### Learning outcomes
    * Understand the purpose of loops - a code structure that allows you to do something very similar many times without repeating the same code for each iteration
    * General loop types such as for and while
    * Looping through collections with constructs like for...of and map()
    * Breaking out of loops and continuing

#### Looping through a collection

##### The for...of loop
    const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

    for (const cat of cats) {
    console.log(cat);
    }


##### map and filter()
    You can use map() to do something to each item in a collection and create a new collection containing the changed items.

    function toUpper(string) {
    return string.toUpperCase();
    }

    const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

    const upperCats = cats.map(toUpper);

    console.log(upperCats);
    // [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

    Here we pass a function into cats.map(), and map() calls the function once for each item in the array, passing in the item. It then adds the return value from each function call to a new arrYosday, and finally returns the new array. In this case the function we provide converts the item to uppercase, so the resulting array contains all our cats in uppercase.

    You can use filter() to test each item in a collection, and create a new collection containing only items that match:
    function lCat(cat) {
    return cat.startsWith("L");
    }

    const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

    const filtered = cats.filter(lCat);

    console.log(filtered);
    // [ "Leopard", "Lion" ] 

    Looks like map(), except the function we pass in returns a boolean.



#### The Standard for loop
    for (initializer; condition; final-expression) {
    // code to run
    }

    const results = document.querySelector("#results");

    function calculate() {
    for (let i = 1; i < 10; i++) {
        const newResult = `${i} x ${i} = ${i * i}`;
        results.textContent += `${newResult}\n`;
    }
    results.textContent += "\nFinished!\n\n";
    }

    const calculateBtn = document.querySelector("#calculate");
    const clearBtn = document.querySelector("#clear");

    calculateBtn.addEventListener("click", calculate);
    clearBtn.addEventListener("click", () => (results.textContent = ""));


#### Looping through collections with a for loop
    const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

    for (const cat of cats) {
    console.log(cat);
    }

#### Exiting loops with break
    If you want to exit a loop before all the iterations have been completed, you can use the break statement. When a case is met in a switch statement that matches the input expression, the break satement immediately exits the switch statement and moves on to the code after it. It's the same with loops, a break statement will immediately exit the loop and make the browser move on to any code that follows it. 


#### Skipping iterations with continue
    The continue statement works similarly to break, but instead of breaking out of the loop entirely, it skips to the next iteration of th eloop.

#### While and do...while
    for is not the only type of general loop available in JavaScript. There are actually many others.
    initializer
    while (condition) {
    // code to run

    final-expression
}
    Works similar to the for loop, except that the initializer vatiable is set before the loop, and the final expresion is included inside the loop after the code to run, rather than these two items being included inside the parenthese. The condition is included insde the parentheses, which are preceded by the while keyword rather than for.

    do..while loop is very similar,
    initializer
    do {
    // code to run

    final-expression
    } while (condition)




### 2.2 Arrays
    String and numbers may be our building blocks, but as your scripts get more complex, you're going to need a way to deal with large quantities of them. Luckily, JavaScript has a couple of data types that are used for just that.An Array is simply an ordered collection of items( Strings, numbers, or other things)

#### Module Intro: Arrays
    Section 5: Arrays and Sets
    Flexible collections with arrays
    Check if elements exist in array
    Perform actions on all elements
    Get subsets of arrays
    Transform arrays with reduce
    Mold arrays with spread operator

#### Build Flexible Collections with Array  
    const todo1= {
        text: 'wash the dishes',
        complete: false
    }

    objects are {}
    arrays are []
    Arrays are a special type of object, arrays they remeber the order that items were added.

    Position in the array, the index. A lot of built in methods. todos.push(). todos.pop(). They perserv order.



#### Challenge: Your First Array

#### Check Element Existence in Arrays
    .indexOf, returns the index if its there.If not then will return -1
    .includes directly if an element exist

    temperatures.some(temperature => temperature.isRecordTemp === true): some return either true or false
    .every will iteralte and only if all of them then it will return true or else it will be false.



#### W3Schools JavaScript Arrays
    An Array is an object type designed for storing data collection
    Key characterisitcs of JavaScript arrays are:
    Elements: An array is a list of values, known as elements.
    Ordered: Array elements are ordered based on their index.
    Zero indexed: The first element is at index 0, the second at index 1, and so on.
    Dynamic size: Arrays can grow or shirnk as elements are added or removed
    Heterogeneous: Arrays can store elements of different data types( numbers, strings, objects, and other arrays)

    An array can hold many values under a single name, and you can access the values by referring to an index number.

    It is a common practice to declare arrays with the const keyword
    You can access an array element by referrign to the index number. Array indexes start with 0

    The JavaScript method toString() concerts an array to a string of (comma separated) array values.

    Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays. Arrays use numbers to access its "elements". Objects use names to access its "members"

    JavaScript variables can be objects. Arrays are special kinds of objects. Because of this, you can have variables of different types in the same Array. Because of this, ypu can have variables of different types in the same Array. You can have objects in an Array, fuctions, and arrays in an Array.

    The real strength of JavaScript arrays are the built-in array properties and methods

    The length property of an array returns the lenght of an array.

    One way to loop through an array, is using the for loop..

    You can also use the Array.forEach() function.

    The easiest way to add a new element to an array is using the push() method.

    
    JavaScript does not support arrays with named indexes. Arrays always use numbered indexes.

    In JavaScript, arrays use numbered indexes. Objects use named indexes.


    The push() method adds a new element to an array (at the end) 

    The push() method returns the new array length

    Shifiting is equivalent to popping, but working on the first element instead of the last

    The shift() method removes the first array element and "shits" all other elements to a lower index.

    The shift() method returns the value that was "shifted out" 

    The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements

    Array.isArray(fruits);  

    Using delete() leaves undefined holes in the array

    Merging Arrays(Concatenating)

    In programming languages, concatenation means joining strings end-to-end.
    Concatenating arrays means joinign arrays end-to-end
    The concat() method creates a new arrau by merging exisitng arrays
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];

    const myChildren = myGirls.concat(myBoys);
    The concat() method does not change the existing arrays. It always returns a new array. Can take any number of array arguments

    The concat() method can also take strings as arguments

    The copyWithin() method copies array elements to another position in an array:


    JavaScript Array splice()
    The splice method can be used to add new items to an array 
    fruits.splice(2,0,"Lemon,"Kiwi")
    The first paramter (2) defines the position where new elements should be added(spliced in)
    The second paramter(0) defines how many elements should be removed


    Using splice() to Remove Elements 
    With clever paramter setting, you can use splice() to remove elements without leaving "holes" in the array
    fruits.splice(0,1)
    The first paramter(0) defines the position where new elements should be added(spliced in)
    The second paramter(1) defines how many elements shuold be removed
    Added toSpliced() method as a safe way to splice an array without altering the original array
    The new method creates a new array, keeping the original array uncahnged.
    

### 2.3 Scope
    In JavaScript, scope defines the accessibility of variables, functions, and bjects within different parts of your code. It determines where these elements are visible and ca be referenced.

#### W3 Schools JavaScript Scope
    Scope determines the accessibility(visibilty) of variables
    JavaScript variables have 3 types of scope:
    Global, Function and Block scope

##### Global Scope
    Variables declared Globally (outside any block or function) have Global Scope.
    Global variables can be accessed from anywhere in a JavaScript program.

##### Function Scope
    Each JavaScript function have their own scope.
    Variables defined inside a function are not accessible(visible) from outside the function.

    Local Variables has Function Scope 
    They can only be accessed from within the function
    Variables with the same name can be used outside the function and used in different functions. Arguments(paramters) work as local variables inside functions


##### Block Scope
    Before ES6, JavaScript variables could only have Global Scope or Function Scope
    ES6 introduced two important new JavaScript keywords: let and const. These provide Block Scope in JS. 
    Variables declared with let and const inside a code block are "block-scoped", meaning they are only accessible within that block.
    This helps prevent unintended variable overwrites and promotes better code organization.





### 2.4 Version Control and Git
    

    




