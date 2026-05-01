# Week 4: JavaScript Algorithms

## Learning Objectives
This week's lesson covers algorithms - the logical instructions and rules defined for a computer system to perform a specific task. A good step to take before writing an algorithm is to pseudocode - write instructions and rules as though they would be spoken to another person before translating the instructions to code. Finally, continue working with git and workflows used in the industry to track changes in code and approve changed for publishing
* Algorithms
* Pseudocode
* Continuing with git - Pull Requests





### Lesson Materials

#### Algorithms
This week we are going to look at algorithms. An algorithm sounds like it might be something hard and complex, but it really is just a set of steps that you are going to code in order to accomplish an end goal - a set of step-by-step instructions to solve a specific problem or perform a task.



#### Pseudocode
As the problems you are trying to solve become more complex, it can be helpful to write the steps of your program down in plain language instead of jumping straight to code. Even experienced devs do this as a way of thinking about the problem they are trying to solve without having to drill down into the specifics of how to code it.



#### Callbacks
Callbacks are functions that you provide to another function or system to be executed when a certain condition or event occurs. They are a way of saying, "Hey, when this thing happens, do this specific task".

##### W3 Schools: JavaScript Callbacks
A JavaScript callback is a function passed as an argument to another function, which is then executed( or "called back") at a later point in time to complete a specific task

This mechanism is fundamental to JavaScript's event-driven and asynchronous programming model


    1. Asynchronous Operations: Callbacks are often used with asynchronous operations, like making network requests, reading files, or interacting with databases. They allow you to specify what should happen when the operation is completed without blocking the rest of your program.
    2. Event Handling: In user interfaces, callbacks are used to respond to user interactions such as button clicks, mouse movements, or keyboard input. You define a callback function that gets triggered when the event occurs.
    3. Modular and Reusable Code: Callbacks make it easier to write modular and reusable code. You can create functions that accept callbacks to perform specific tasks, allowing you to reuse those functions with different behaviors depending on the callback provided.
    4. Iterations and Loops: Callbacks can be used in iterations and loops to execute a function for each element in a collection, like an array or a list. This is known as "callback-based iteration."
    5. Promises and Promisified Code: In JavaScript, promises often work with callbacks to handle asynchronous tasks more cleanly. Promises provide a structured way to handle callbacks and make asynchronous code easier to read and maintain.

Overall, callbacks are a fundamental building block in software development, enabling you to define what should happen when a particular event or operation occurs, making your code more flexible, modular, and responsive.


#### Continuing with Git - What is a Pull Request?
A pull request is a request to merge a set of changes from one branch into another. You can also think of it as requesting that a branch pull your updated code into that branch. The source branch is the branch with new or modified code that a dev wants to contribute. The target branch is the branch into which the changes will be merged, typically the main or development branch of the project.

After the PR(Pull Request) has been approved, then the owner of the target branch can merge the code.


#### Notes over assigment
Use for ... of to get the value directly
Use for ... in to get the index

For in use for objects as it gives you the keys
For of use for iterables (arrays, strings), gives you the values