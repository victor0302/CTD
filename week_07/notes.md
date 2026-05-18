# The Dom API

## Learning Objectives
This week's lesson will discuss the Document Object Model (DOM) which is the structure of an HTML file and how JavaScript can access the content of a site by referencing specifics part of the document's object outline

## Lesson Materials

## 7.1 Document Object Model (DOM)

### The Odin Project Links:

#### DOM Manipulation and Events
Lesson overview
    Explain what the DOM is in relation to a webpage
    The differenece between a node and an element
    How to target nodes with selectors
    The basics methods for finding,adding, removing, and altering DOM nodes.
    The difference between a NodeList and an array of nodes
    What bubbling is and how it works

Document Object Model
The DOM is a tree-like representatation of the contents od a webpage - a tree of "nodes" with different relationships on how they're arranged in the HTML document.

Security risks of innerHTML
Using textContent is preferred over innerHTML for adding text, as innerHTML should be used sparingly to avoid potential security risks.

Timing of JavaScript
Include your JavaScript at the bottom of your HTML file so that it gets run after the DOM nodes are parsed and created
Alternatively, you can link the JavaScript file in the <head> of your HTML Document.

Events
You can specify function attributes directly on your HTML elements.
You can set properties in the form of on<eventType>, such as onclick or onmousedown, on the DOM nodes in your JavaScript
You can attach event listerners to the DOM nodes in your JavaScript

When we pass in alertFunction or function (e) {} as an argument to addEventListener, we call this a callback. A callback is simply a function that is passed into another function as an argument
The e parameter in that callback function contains an object that references the event itself.

#### Form Basics
Create forms with HTML 
Have a basic idea of how to style forms

The form element is a container element like the div element. Wraps all of the inputs a user will interact with on a form
The form element accepts two essential attributes; the first is the action attribute which takes a url value that tells the form wher it shuold send its data to be processed. 
The second is the method attribute which tells the browser which HTTP request method it should use to submit the form. The GET and POST request methods are the two you will find yourself using the most.

We use GET when we want to retrieve something from a server.
Post is used when we want to change somethig on the server.

Form comtrols
To start collecting user data, we need to use form control elements. 

The input element
The input element is the most versatile of all the form control elements. It accepts a type attribute which tells the browser what type of data it should expect and how it should render the input element.

Labels
An input on its own isn't very useful since the user will not know what kind of data they are supposed to provide. WE give a lbel to infor, users what type of data they are expected to enter.

Labels accept a for attribute, which associates it with a particular input. 

Selection elements
Sometimes you will want users to select a vlaue from a predefined list. 

Radio buttons
Select dropdowns are great for saving space on the page when we have an extensive list of options we want users to choose from.