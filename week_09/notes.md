# The Fetch API

## Learning Objectives
This weeks primary focus will be the Fetch API. Fetch is a built-in function of JavaScript language that allows you to send and receive data across the web. The fetch() method will allow you to make network requests to get and send data over the internet

## Lesson Materials

## 9.1 lessons

### The Odin Projects Articles
#### JSON
JSON (JavaScript Object Notation) is a standarddized format for structuring data.
In JavaScript, the methods for parsing and generating JSON are provided by the JSON object.

#### Working with APIs
APIS
Servers created to provide functionality and serve data for external use (in websites or apps) often do so using APIs, or Application Programming Interfaces
APIs are accessed through URLs, and the specifics of how to query these URLs change based on the specific service you are using.
In most cases, you will have to create an account and request an "API key" from the API service before attempting to fetch data from their endpoints(specific URLs that you use to access a particular function or data within the API)

Fetching Data
A couple of years ago the main way to access API data inn your code was using an XMLHttpRequest. This function still works in all browsers, but unfortunately, it is not particulary nice to use.

Fetch is hte new and better way

#### Async and Await
Lesson Overview
How to decalre an async function
what the async keyword does
what the await keyword does
what an async function returns
explain what happens when an error is thrown inside an async function
explain how you can handle errors inside an async function

The async keyword
The async keyword is what lets the JavaScript engine know that you are declaring an asynchronous function, it automatically returns a promise. Throwing an error will reject the promise.
An important thing to understand is async functions are just syntactial sugar for promises. 

The await keyword
await does the folliwng: it tells JavaScript to wait for an asynchronous action to finish before continuing the function. It's like a pause until done keyword. The await keyword is used to get a value from a function where you would normaly use .then(). Instead of calling .then() after the asynchronous function, you would assign a variable to the results using await. 

Error handling
Promises have the .catch() method for handling rejected promises, and since async function just return a promise, you can call the function, and append a .catch() method to the end.
But there is another way: the try...catch statement! If you want to handle the error directly insde the async function, you can use try...catch with async/await syntax. 


## 9.2 The fetch API
At a high level, fetch is used to make HTTP requests on the browser. It uses Promises to handle the asynchronous nature of HTTP requests and respponses. 

fetch has two parameters, url and options. If the URL is the only argument passed into the fetch function, then a get request will be made.

## 9.3 Async and Await
The async keyword is applied to a function. On its own, the async keyword transforms the function so that when the function is invoked, the return value will be wrapped in a promise.
The await keyword allows you to treat async requests as if they were sync

