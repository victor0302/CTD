# Async Programming and Promises

## Lesson Materials

### Synchronous Code
Blocking execution: In synchronous code, tasks are executed sequentially. Each operation must complete before the next one can begin.
Real life example: Phone calls, face to face conversation.
Predictable flow: The order of execution is clear and straightforward, making it easier to reason about and debug.
Predictability: The sequential nature of sync operations ensure that task are executed in a predictable order, which can be important for tasks requiring strict sequencing.
Inefficiency with I/O Operations: Sync programming can be inefficient for I/O-bound tasks, as operations like file reading or network requests can block the entire thread until completion.

### Asynchronous Code
Non-blocking execution: Asynchronous code allows a program to initiate a task and continue executing other code without waiting for initiated task to complete. 
Real life example: Text Messages, Email
Improved responsiveness: This is crucial for applications where responsiveness is key, such as web servers handling multiple user requests or user interfaces that need to reamin interactive during long operations
Complexity: Asynchronous code can be more complex to write and debug due to the non-linear flow of execution and the need for mechanisms like callbacks, promises, or async/await keywords to manage results.


### 8.2 Promises
Promises are another way to manage asynchronous operations by providing a cleaner way to handle errors and chain multiple asynchronours steps, thereby avoiding "callback hell" - a pattern where callbacks are nested so deeply that code becomes hard to read and maintain.

Callbacks are functions passed to other functions to be executed later
Promises are objects representing the eventual success or failure of an async operation with methods for handling these outcomes. They are called promises because they gurantee that an async operation will eventually produce a value or a reason for its failure.

### 8.3 Lesson Materials


