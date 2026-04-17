# JavaScript Objects

## Learning Objectives
    This week's lesson will explore the syntax of JavaScript Objects and how to reference data within them. Additionally, version control using git will be further explored.

## Lesson Materials

### 3.1 JavaScript Objects
    In JavaScript, objects are used to manage data using key-value pairs. While primitive types (like strings or numbers) hold a single value, objects allow you to group related data together.

#### JavaScript.Info: Objects
    There are eight data types in JavaScript. Seven of them are called "primitive", because their values contain only a single thing.

    In contrast,objects are used to store keyed collections of various data and more complex entities.  

    An object can be created with curly braces{} with an optional list of properties. A property is a "key: value", where key is a string. Also called a property name. Value can be anything.

    An empty object ("empty cabinet") can be created using one of two syntaxes:
    let user = new Object();
    let user = {}

    let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
    };

    Property values are accessible using the dot notation:
    user.name

    To remove a property, we can use the delete operator.
    delete user.age;

    For multiword properties, the dot access doesn't work
    There's an alternative "square bracket notation" that works with any string
    user["likes birds"] = true;


    Computed properties
    We can use square brackets in an object literal, when creating an object. That's called computed properties.

    Square brackets are much more powerful than dot notation. They allow any property names and variables. But they are also more cumbersome to write.

    
    Property value shorthand
    In real code, we often use existing variables as values for property names.
    function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
    }
    let user = makeUser("John", 30);
    alert(user.name); // John

    Property names limitations
    As we already know, a variable cannot have a name equal to one of the language-reserved words. But for an object property there's no such restriction.

    Property existence test, "in" operator
    A notable feature of objects in JavaScript, compared to many other languages, is that it's possible to acess any property. 
    "key"in object
    let user = { name: "John", age: 30 };
    alert( "age" in user ); // true, user.age exists
    alert( "blabla" in user ); // false, user.blabla doesn't exist

    The "for..in" loop
    To walk over all keys of an object, there exists a special form of the loop: for..in. THis is completely different thing from the for(;;).

    for (key in object) {
    // executes the body for each key among object properties
    }

    let user = {
    name: "John",
    age: 30,
    isAdmin: true
    };

    `for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
    }`


    Ordered like an object
    Are objects ordered? In other words, if we loop over an object, do we get all properties in the same order they were added? 
    Integer properties? What's that? The "integer property" term here means a string that can be converted to-and-from an integer with a change.

#### Mozilla DevDocs: Objects Basics
    Learning outcomes:
    * Understand that in JavaScript most things are objects, and you've probably used objects every time you've touched JavaScript
    * Basic syntax: Objects literal, properties and methods, nesting objects and arrays in objects.
    * Using constructors to create a new object.
    * object scope, and this.
    * Accessing properties and methods- bracket and dot syntax.

    Object basics
    An object is a collection of related data and/or functionality. These usually consist of severl varibles and functions (which are called properties and methods when they are inside objects).

    The value of an object member can pretty much be anything. The first two items are data items, and are referred to as the object's properties. The last two items are functions that allow the object to do something with the data, and are referred to as the objects method.

    An object like this is referred to as an object literal, we've literally written out the objects contents as we've come to creat it. 

    It is very common to create an object using an object literal when you want to transfer a series of structured, related data items in some manner, for example sending a request to the server to be put into a database. Sending a single object is much more efficent than sending serveral items individually, and it is easier tow rk with than array, when you want to identify individual items by name.


    Dot notation
    Above, you accessed the object's properties and methods using dot notation. The object,name(person) acts as the namespace - it must be entered first to access anything inside the object.

    Objects as object properties
    To access these items you just need to chain the extra step onto the end with another dot. person.name.first;

    Bracket notation
    Bracket notation provides an alternative way to access object properties. Instead of person.age; person.name.first;. You can do person["age"]; person["name"]["first"]

    This looks very similar to how you access the items in an array, and it is basically the same thing - instead of using an index number to select an item, you are using the name associated with each member's value. It is no wonder that objects are sometimes called associative arrays- they map strings to values in the way way that arrays map numbers to values.

    Dot notation is generally preferred over bracket notation because it is more succinct and eaiser to read. If an object property name is held in a variable, then you can't use dot notation to access the value, but you can access the value using bracket notation.
    
    