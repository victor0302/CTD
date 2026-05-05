//----------------------------------
// LESSON 4 ALGORITHMS
//----------------------------------

// ---------- QUESTION 1 ----------
// Create a function called 'convertTemp' that takes 1 temperatue parameter in celsius and return the temperature in Fahrenheit. Log both the input and output values

// EXAMPLE LOG:
//  console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
// EXAMPLE OUTPUT:
//  Q1 convertTemp: 0 32

// Call convertTemp with several different celsium temperatures

// PUT YOUR CODE HERE
function convertTemp(celsiusTemp){
    return(celsiusTemp * 1.8 + 32)
}
let celsiusTemp = 100
let celsiusTemp2 = 200
let celsiusTemp3 = 0
console.log("Q1 convertTemp: ", celsiusTemp, convertTemp(celsiusTemp));
console.log("Q1 convertTemp: ", celsiusTemp2, convertTemp(celsiusTemp2));
console.log("Q1 convertTemp: ", celsiusTemp3, convertTemp(celsiusTemp3));


// ---------- QUESTION 2 ----------
// Create a function called 'reverseString' that takes 1 string parameter and returns the reverseString. Use a for loop. Log both the input and output values.

// EXAMPLE LOG:
//  console.log("Q2 reverseString: ", inputString, reverseString(inputString));
// EXAMPLE OUTPUT:
//  Q2 reverseString: HelloWorld dlroWolleH

// Call reverseString with several different strings. Make sure it works for an empty string.

// PUT YOUR CODE HERE
function reverseString(str){
    let reverseStr = ""
    for(let lettr of str){
        reverseStr = lettr + reverseStr
    }
    return reverseStr
}
let test = "ohhh"
let test1 = "Victor"
let test2 = "Joe"
console.log("Q2 reverseString:", test, reverseString(test))
console.log("Q2 reverseString:", test1, reverseString(test1))
console.log("Q2 reverseString:", test2, reverseString(test2))


// ---------- QUESTION 3 ----------
// Let's make a useful math problem - create a tip calculator! Create a function named tipCalculator that takes two parameters - billTotal and tipPercentage.  Return the total bill amount

// EXAMPLE LOG:
//  console.log("Q3 tipCalculator: ", tipCalculator (20, .20));
// EXAMPLE OUTPUT:
//  Q3 tipCalculator: 50 0.2 60

// PUT YOUR CODE HERE
function tipCalculator(billTotal, tipPercentage){
    let total = billTotal + (billTotal * tipPercentage)
    return total
}
console.log("Q3 tipCalculator: ", 50, 0.2, tipCalculator(50, 0.2))

// Don't forget your console.logs!


// ---------- QUESTION 4 ----------
// Create two variables named 'num1' and 'num2' and assign them integer values. Create a function called 'multiplyThese' that takes 2 parameters and returns the product of the two parameters (as a reminder, a product is the resulting number when two numbers are multiplied together).

// EXAMPLE LOG:
//  console.log("Q4: ", num1, num2, multiplyThese(num1, num2));
// EXAMPLE OUTPUT: 
//  Q4 multiplyThese: 10 10 100

// PUT YOUR CODE HERE
let num1 = 10
let num2 = 30
function multiplyThese(num1, num2){
    return num1 * num2
}
console.log("Q4 multiplyThese: ", num1, num2, multiplyThese(num1, num2))


// ---------- QUESTION 5 ----------
// Create a function called 'getAverage' that takes 2 parameters and returns their average. NOTE: In some programming languages, the types of numbers you use in equations can effect what type of number (integer/floating point) you get as a result. We suggest using 2.0 instead of 2 as you're calculating the average.

// EXAMPLE LOG:
//  console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0));
// EXAMPLE OUTPUT: 
//  Q5 getAverage: 3 6 4.5

// PUT YOUR CODE HERE
function getAverage(inp1, inp2){
    return (inp1 + inp2) / 2.0
}
console.log("Q5 getAverage: ", 3, 6, getAverage(3.0, 6.0))


// ---------- QUESTION 6 ----------
// Create a function named 'isPrime' that returns true or false based on whether the number is prime or not.
// Hint: To determine if a number is prime, you can check if it's divisible by any number from 2 up to the square root of the number. 0 and 1 are not prime numbers.
// Make sure you test several prime and non prime numbers along with 0 and 1.

// EXAMPLE LOG:
//  console.log("Q6 isPrime: ", number, isPrime(number));
// EXAMPLE OUTPUT: 
//  Q6 isPrime: 12 false

// PUT YOUR CODE HERE
function isPrime(num){
    if(num == 1 || num == 0){
        return false
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
console.log("Q6 isPrime: ", 12, isPrime(12))
console.log("Q6 isPrime: ", 7, isPrime(7))
console.log("Q6 isPrime: ", 0, isPrime(0))
console.log("Q6 isPrime: ", 1, isPrime(1))


// ---------- QUESTION 7 ----------
// Using the 'isPrime' function created in the previous question, create another function named 'getPrimesUpTo' that takes an integer as an input and returns an array of all primes up to and including the input number. 
// Be sure to include several test cases

// EXAMPLE LOG:
//  console.log("Q7 getPrimesUpTo: ", number, isPrime(number));
// EXAMPLE OUTPUT:
//  Q7 getPrimesUpTo: 13 [2,3,5,7,11,13]

// PUT YOUR CODE HERE
function getPrimesUpTo(num){
    let primes = []
    for(let i = 2; i <= num; i++){
        if(isPrime(i))
        primes.push(i)
    }
    return primes
}
let number = 13
console.log("Q7 getPrimesUpTo: ", number, getPrimesUpTo(number))


// ---------- QUESTION 8 ----------
// Now, we're going to write several functions that calculate a student's grade.  
// First, write a function named 'calculateAverage' that takes an input array of scores and calculates a student's average based on those scores.
// Check all of the grades in the array and ignore any values that are not in the range 0 - 100.
// Also, make sure that an empty array or no valid values in the array do not result in an error (hint: make sure you aren't dividing by 0)

// EXAMPLE LOG:
//  console.log("Q8 calculateAverage: ", calculateAverage(scores));
// EXAMPLE OUTPUT:
//  Q8 calculateAverage: 85 // input array let scores = [90, 80, 85];

// PUT YOUR CODE HERE
function calculateAverage(arr){
    let sum = 0
    let len = 0
    for(let score of arr){
        if(score < 0 || score > 100){
            continue
        }
        else{
            sum += score
            len += 1
        }
    }
    if(len === 0){
        return 0
    }
    return sum/len
}
let scores = [90, 80, 85]
console.log("Q8 calculateAverage: ", calculateAverage(scores))


// ---------- QUESTION 9 ----------
// Now, create a function - getLetterGrade(average) - that takes a grade average and returns a letter grade based on the following scale. Make sure you test with several averages.
// A: 90–100
// B: 80–89
// C: 70–79
// D: 60–69
// F: below 60

// EXAMPLE LOG:
//  console.log("Q9 getLetterGrade: ", getLetterGrade(95));
// EXAMPLE OUTPUT:
//  Q9 getLetterGrade(95): A

// PUT YOUR CODE HERE
function getLetterGrade(ave){
    let lettGrad = ""
    if(ave >= 90 && ave <= 100){
        lettGrad = "A"
    }
    else if(ave >= 80 && ave <= 89){
        lettGrad = "B"
    }
    else if(ave >= 70 && ave <= 79){
        lettGrad = "C"
    }
    else if(ave >= 60 && ave <= 69){
        lettGrad = "D"
    }
    else if(ave < 60){
        lettGrad = "F"
    }
    return lettGrad
}
console.log("Q9 getLetterGrade: ", getLetterGrade(95))
console.log("Q9 getLetterGrade: ", getLetterGrade(85))
console.log("Q9 getLetterGrade: ", getLetterGrade(55))


// ---------- QUESTION 10 ----------
// Create a 3rd function named - passed(letterGrade) - that returns true if a student's grade is A, B or C, false otherwise. Make sure you handle a value other than A,B,C,D or F passed in.

// EXAMPLE LOG:
//  console.log("Q10 passed('A'): ", passed('A'));
// EXAMPLE OUTPUT:
//  Q10 passed('A''): true

// PUT YOUR CODE HERE
function passed(letterGrade){
    if(letterGrade === "A" || letterGrade === "B" || letterGrade === "C"){
        return true
    }
    else{
        return false
    }
}
console.log("Q10 passed('A'): ", passed('A'))
console.log("Q10 passed('D'): ", passed('D'))
console.log("Q10 passed('Z'): ", passed('Z'))


// ---------- QUESTION 11 ----------
// Create a function named printClassResult (className, student, scores) that utilizes all three functions to output information on a student.
// Print yes is they have passed and no if they did not.

// EXAMPLE LOG:
//  console.log("Q11: ", printClassResult ("History 101", "Jane Doe", [60, 70, 85, 87]));  
// EXAMPLE OUTPUT:
//  Q11: History 101 - Student: Jane Doe, Average: 75.5, Grade: C, Passed: yes

// PUT YOUR CODE HERE
function printClassResult(className, student, scores){
    let avg = calculateAverage(scores)
    let lettrGrad = getLetterGrade(avg)
    let outcome = passed(lettrGrad)
    if(outcome === true){
        outcome = "yes"
    }
    else{
        outcome = "no"
    }
    return(`Q11: ${className} - Student: ${student}, Average: ${avg}, Grade: ${lettrGrad}, Passed: ${outcome}`)
}
console.log("Q11: ", printClassResult("History 101", "Jane Doe", [60, 70, 85, 87]));


// ---------- QUESTION 12 ----------
// Now, let's see how to use a callback. First, create a function that simulates pushing a button. Name the function buttonPushed and log the message "The button was pushed!" in the function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  buttonPushed();

// EXAMPLE OUTPUT: (we're using this function in the next question as well)
//  Q12, Q13: The button was pushed!

// PUT YOUR CODE HERE
function buttonPushed(){
    console.log("Q12, Q13: The button was pushed!")
}
buttonPushed()


// ---------- QUESTION 13 ----------
// Now, create a function called simulateButtonPush and pass the function created in question 12 to that function.

// EXAMPLE CALL: (the log is within the function, so you do not need to log the call)
//  simulateButtonPush(buttonPushed);

// EXAMPLE OUTPUT: 
//  The button was pushed!

// PUT YOUR CODE HERE
function simulateButtonPush(buttonPushed){
    buttonPushed()
}
simulateButtonPush(buttonPushed)